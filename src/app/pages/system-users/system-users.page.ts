import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActionSheetController, AlertController } from '@ionic/angular';
import { SystemUserService } from '../../services/system-user.service';
import { SystemUserInterface } from '../../interfaces/system-user.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-system-users',
  templateUrl: './system-users.page.html',
  styleUrls: ['./system-users.page.scss'],
})
export class SystemUsersPage implements OnInit {

  systemUsers: SystemUserInterface[] = [];

  constructor(private authService: AuthService,
    private storage: Storage,
    private systemUserService: SystemUserService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private router: Router) { }

  async ngOnInit() {
    this.loadSystemUsers();
  }

  ionViewWillEnter() {
    this.loadSystemUsers();
  }

  async loadSystemUsers() {
    const token = await this.storage.get('token');
    this.systemUserService.getSystemUsers(token).subscribe((data: SystemUserInterface[]) => {
      this.systemUsers = data;
    });
  }

  async presentActionSheet(systemUser: SystemUserInterface) {
    const actionSheet = await this.actionSheetController.create({
      header: `${systemUser.firstName} ${systemUser.lastName}`,
      buttons: [
        {
          text: 'Update',
          icon: 'pencil-outline',
          handler: () => {
            this.updateSystemUser(systemUser.id);
          },
        },
        {
          text: 'Delete',
          icon: 'trash-outline',
          role: 'destructive',
          handler: () => {
            this.presentDeleteAlert(systemUser);
          },
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  goToAddSystemUser() {
    this.router.navigate(['/add-system-user']);
  }

  viewSystemUserDetails(id: any) {
  }

  updateSystemUser(id: any) {
    this.router.navigate(['/update-system-user', id]);
  }

  async presentDeleteAlert(systemUser: SystemUserInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the system user <strong>${systemUser.firstName} ${systemUser.lastName}</strong>?`,
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
            this.deleteSystemUser(systemUser.id);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteSystemUser(id: any) {
    const token = await this.storage.get('token');
    this.systemUserService.deleteSystemUser(id, token).subscribe(systemUsers => {
      this.loadSystemUsers();
    })
  }

}
