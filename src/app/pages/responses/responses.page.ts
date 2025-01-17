import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActionSheetController, AlertController } from '@ionic/angular';
import { ResponseService } from '../../services/response.service';
import { ResponseInterface } from '../../interfaces/response.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.page.html',
  styleUrls: ['./responses.page.scss'],
})
export class ResponsesPage implements OnInit {

  responses: ResponseInterface[] = [];

  constructor(private authService: AuthService,
    private storage: Storage,
    private responseService: ResponseService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private router: Router) { }

  async ngOnInit() {
    this.loadResponses();
  }

  ionViewWillEnter() {
    this.loadResponses();
  }

  async navigateToEditProfile() {
    const systemUserId = await this.authService.getSystemUserIdFromToken();
    if (systemUserId) {
      this.router.navigate(['/edit-profile', systemUserId]);
    } else {
      console.error('SystemUser ID not found in token');
    }
  }

  async loadResponses() {
    const token = await this.storage.get('token');
    this.responseService.getResponses(token).subscribe((data: ResponseInterface[]) => {
      this.responses = data;
    });
  }

  async presentActionSheet(response: ResponseInterface) {
    const actionSheet = await this.actionSheetController.create({
      header: `${response.id}`,
      buttons: [
        {
          text: 'Update',
          icon: 'pencil',
          handler: () => {
            this.updateResponse(response.id);
          },
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.presentDeleteAlert(response);
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

  goToAddResponse() {
    this.router.navigate(['/add-response']);
  }

  updateResponse(id: any) {
    this.router.navigate(['/update-response', id]);
  }

  async presentDeleteAlert(response: ResponseInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the response <strong>${response.id}</strong>?`,
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
            this.deleteResponse(response.id);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteResponse(id: any) {
    const token = await this.storage.get('token');
    this.responseService.deleteResponse(id, token).subscribe(responses => {
      this.loadResponses();
    })
  }

}
