import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActionSheetController, AlertController } from '@ionic/angular';
import { QuestionOptionService } from '../../services/question-option.service';
import { QuestionOptionInterface } from '../../interfaces/question-option.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-question-options',
  templateUrl: './question-options.page.html',
  styleUrls: ['./question-options.page.scss'],
})
export class QuestionOptionsPage implements OnInit {

  questionOptions: QuestionOptionInterface[] = [];

  constructor(private authService: AuthService,
    private storage: Storage,
    private questionOptionService: QuestionOptionService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private router: Router) { }

  async ngOnInit() {
    this.loadQuestionOptions();
  }

  ionViewWillEnter() {
    this.loadQuestionOptions();
  }

  async loadQuestionOptions() {
    const token = await this.storage.get('token');
    this.questionOptionService.getQuestionOptions(token).subscribe((data: QuestionOptionInterface[]) => {
      this.questionOptions = data;
    });
  }

  async presentActionSheet(questionOption: QuestionOptionInterface) {
    const actionSheet = await this.actionSheetController.create({
      header: questionOption.value,
      buttons: [
        {
          text: 'Update',
          icon: 'pencil',
          handler: () => {
            this.updateQuestionOption(questionOption.id);
          },
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.presentDeleteAlert(questionOption);
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

  goToAddQuestionOption() {
    this.router.navigate(['/add-question-option']);
  }

  updateQuestionOption(id: any) {
    this.router.navigate(['/update-question-option', id]);
  }

  async presentDeleteAlert(questionOption: QuestionOptionInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the question option <strong>${questionOption.value}</strong>?`,
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
            this.deleteQuestionOption(questionOption.id);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteQuestionOption(id: any) {
    const token = await this.storage.get('token');
    this.questionOptionService.deleteQuestionOption(id, token).subscribe(questionOptions => {
      this.loadQuestionOptions();
    })
  }

}
