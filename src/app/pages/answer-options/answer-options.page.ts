import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActionSheetController, AlertController } from '@ionic/angular';
import { AnswerOptionService } from '../../services/answer-option.service';
import { AnswerOptionInterface } from '../../interfaces/answer-option.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-answer-options',
  templateUrl: './answer-options.page.html',
  styleUrls: ['./answer-options.page.scss'],
})
export class AnswerOptionsPage implements OnInit {

  answerOptions: AnswerOptionInterface[] = [];

  constructor(private authService: AuthService,
    private storage: Storage,
    private answerOptionService: AnswerOptionService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private router: Router) { }

  async ngOnInit() {
    this.loadAnswerOptions();
  }

  ionViewWillEnter() {
    this.loadAnswerOptions();
  }

  async navigateToEditProfile() {
    const systemUserId = await this.authService.getSystemUserIdFromToken();
    if (systemUserId) {
      this.router.navigate(['/edit-profile', systemUserId]);
    } else {
      console.error('SystemUser ID not found in token');
    }
  }

  async loadAnswerOptions() {
    const token = await this.storage.get('token');
    this.answerOptionService.getAnswerOptions(token).subscribe((data: AnswerOptionInterface[]) => {
      this.answerOptions = data;
    });
  }

  async presentActionSheet(answerOption: AnswerOptionInterface) {
    const actionSheet = await this.actionSheetController.create({
      header: `${answerOption.id}`,
      buttons: [
        {
          text: 'Update',
          icon: 'pencil',
          handler: () => {
            this.updateAnswerOption(answerOption.id);
          },
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.presentDeleteAlert(answerOption);
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

  goToAddAnswerOption() {
    this.router.navigate(['/add-answer-option']);
  }

  updateAnswerOption(id: any) {
    this.router.navigate(['/update-answer-option', id]);
  }

  async presentDeleteAlert(answerOption: AnswerOptionInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the answer option <strong>${answerOption.id}</strong>?`,
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
            this.deleteAnswerOption(answerOption.id);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteAnswerOption(id: any) {
    const token = await this.storage.get('token');
    this.answerOptionService.deleteAnswerOption(id, token).subscribe(answerOptions => {
      this.loadAnswerOptions();
    })
  }

}
