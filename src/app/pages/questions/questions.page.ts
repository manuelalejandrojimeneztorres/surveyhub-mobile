import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActionSheetController, AlertController } from '@ionic/angular';
import { QuestionService } from '../../services/question.service';
import { QuestionInterface } from '../../interfaces/question.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  questions: QuestionInterface[] = [];

  constructor(private authService: AuthService,
    private storage: Storage,
    private questionService: QuestionService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private router: Router) { }

  async ngOnInit() {
    this.loadQuestions();
  }

  ionViewWillEnter() {
    this.loadQuestions();
  }

  async loadQuestions() {
    const token = await this.storage.get('token');
    this.questionService.getQuestions(token).subscribe((data: QuestionInterface[]) => {
      this.questions = data;
    });
  }

  async presentActionSheet(question: QuestionInterface) {
    const actionSheet = await this.actionSheetController.create({
      header: question.text,
      buttons: [
        {
          text: 'Update',
          icon: 'pencil',
          handler: () => {
            this.updateQuestion(question.id);
          },
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.presentDeleteAlert(question);
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

  goToAddQuestion() {
    this.router.navigate(['/add-question']);
  }

  updateQuestion(id: any) {
    this.router.navigate(['/update-question', id]);
  }

  async presentDeleteAlert(question: QuestionInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the question <strong>${question.text}</strong>?`,
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
            this.deleteQuestion(question.id);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteQuestion(id: any) {
    const token = await this.storage.get('token');
    this.questionService.deleteQuestion(id, token).subscribe(questions => {
      this.loadQuestions();
    })
  }

}
