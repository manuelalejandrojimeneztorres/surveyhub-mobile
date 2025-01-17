import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActionSheetController, AlertController } from '@ionic/angular';
import { AnswerService } from '../../services/answer.service';
import { AnswerInterface } from '../../interfaces/answer.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.page.html',
  styleUrls: ['./answers.page.scss'],
})
export class AnswersPage implements OnInit {

  answers: AnswerInterface[] = [];

  constructor(private authService: AuthService,
    private storage: Storage,
    private answerService: AnswerService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private router: Router) { }

  async ngOnInit() {
    this.loadAnswers();
  }

  ionViewWillEnter() {
    this.loadAnswers();
  }

  async navigateToEditProfile() {
    const systemUserId = await this.authService.getSystemUserIdFromToken();
    if (systemUserId) {
      this.router.navigate(['/edit-profile', systemUserId]);
    } else {
      console.error('SystemUser ID not found in token');
    }
  }

  async loadAnswers() {
    const token = await this.storage.get('token');
    this.answerService.getAnswers(token).subscribe((data: AnswerInterface[]) => {
      this.answers = data;
    });
  }

  async presentActionSheet(answer: AnswerInterface) {
    const actionSheet = await this.actionSheetController.create({
      header: `${answer.id}`,
      buttons: [
        {
          text: 'Update',
          icon: 'pencil',
          handler: () => {
            this.updateAnswer(answer.id);
          },
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.presentDeleteAlert(answer);
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

  goToAddAnswer() {
    this.router.navigate(['/add-answer']);
  }

  updateAnswer(id: any) {
    this.router.navigate(['/update-answer', id]);
  }

  async presentDeleteAlert(answer: AnswerInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the answer <strong>${answer.id}</strong>?`,
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
            this.deleteAnswer(answer.id);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteAnswer(id: any) {
    const token = await this.storage.get('token');
    this.answerService.deleteAnswer(id, token).subscribe(answers => {
      this.loadAnswers();
    })
  }

}
