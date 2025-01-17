import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActionSheetController, AlertController } from '@ionic/angular';
import { SystemUserRoleService } from '../../services/system-user-role.service';
import { SystemUserRoleInterface } from '../../interfaces/system-user-role.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-system-user-roles',
  templateUrl: './system-user-roles.page.html',
  styleUrls: ['./system-user-roles.page.scss'],
})
export class SystemUserRolesPage implements OnInit {

  systemUserRoles: SystemUserRoleInterface[] = [];

  constructor(private authService: AuthService,
    private storage: Storage,
    private systemUserRoleService: SystemUserRoleService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private router: Router) { }

  async ngOnInit() {
    this.loadSystemUserRoles();
  }

  ionViewWillEnter() {
    this.loadSystemUserRoles();
  }

  async navigateToEditProfile() {
    const systemUserId = await this.authService.getSystemUserIdFromToken();
    if (systemUserId) {
      this.router.navigate(['/edit-profile', systemUserId]);
    } else {
      console.error('SystemUser ID not found in token');
    }
  }

  async loadSystemUserRoles() {
    const token = await this.storage.get('token');
    this.systemUserRoleService.getSystemUserRoles(token).subscribe((data: SystemUserRoleInterface[]) => {
      this.systemUserRoles = data;
    });
  }

  async presentActionSheet(systemUserRole: SystemUserRoleInterface) {
    const actionSheet = await this.actionSheetController.create({
      header: `${systemUserRole.id}`,
      buttons: [
        {
          text: 'Update',
          icon: 'pencil',
          handler: () => {
            this.updateSystemUserRole(systemUserRole.id);
          },
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.presentDeleteAlert(systemUserRole);
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

  goToAddSystemUserRole() {
    this.router.navigate(['/add-system-user-role']);
  }

  updateSystemUserRole(id: any) {
    this.router.navigate(['/update-system-user-role', id]);
  }

  async presentDeleteAlert(systemUserRole: SystemUserRoleInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the system user role <strong>${systemUserRole.id}</strong>?`,
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
            this.deleteSystemUserRole(systemUserRole.id);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteSystemUserRole(id: any) {
    const token = await this.storage.get('token');
    this.systemUserRoleService.deleteSystemUserRole(id, token).subscribe(systemUserRoles => {
      this.loadSystemUserRoles();
    })
  }

}
