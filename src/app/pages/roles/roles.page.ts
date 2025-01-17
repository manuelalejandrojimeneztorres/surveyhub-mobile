import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActionSheetController, AlertController } from '@ionic/angular';
import { RoleService } from '../../services/role.service';
import { RoleInterface } from '../../interfaces/role.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
})
export class RolesPage implements OnInit {

  roles: RoleInterface[] = [];

  constructor(private authService: AuthService,
    private storage: Storage,
    private roleService: RoleService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private router: Router) { }

  async ngOnInit() {
    this.loadRoles();
  }

  ionViewWillEnter() {
    this.loadRoles();
  }

  async navigateToEditProfile() {
    const systemUserId = await this.authService.getSystemUserIdFromToken();
    if (systemUserId) {
      this.router.navigate(['/edit-profile', systemUserId]);
    } else {
      console.error('SystemUser ID not found in token');
    }
  }

  async loadRoles() {
    const token = await this.storage.get('token');
    this.roleService.getRoles(token).subscribe((data: RoleInterface[]) => {
      this.roles = data;
    });
  }

  async presentActionSheet(role: RoleInterface) {
    const actionSheet = await this.actionSheetController.create({
      header: role.name,
      buttons: [
        {
          text: 'Update',
          icon: 'pencil',
          handler: () => {
            this.updateRole(role.id);
          },
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.presentDeleteAlert(role);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  goToAddRole() {
    this.router.navigate(['/add-role']);
  }

  updateRole(id: any) {
    this.router.navigate(['/update-role', id]);
  }

  async presentDeleteAlert(role: RoleInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the role <strong>${role.name}</strong>?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          },
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteRole(role.id);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteRole(id: any) {
    const token = await this.storage.get('token');
    this.roleService.deleteRole(id, token).subscribe(roles => {
      this.loadRoles();
    })
  }

}
