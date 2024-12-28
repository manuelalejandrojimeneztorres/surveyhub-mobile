import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { QuestionTypeService } from '../../services/question-type.service';
import { QuestionTypeInterface } from '../../interfaces/question-type.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-question-types',
  templateUrl: './question-types.page.html',
  styleUrls: ['./question-types.page.scss'],
})
export class QuestionTypesPage implements OnInit {

  questionTypes: QuestionTypeInterface[] = [];

  constructor(private authService: AuthService,
    private storage: Storage,
    private questionTypeService: QuestionTypeService,
    private alertController: AlertController,
    private router: Router) { }

  async ngOnInit() {
    this.loadQuestionTypes();
  }

  ionViewWillEnter() {
    this.loadQuestionTypes();
  }

  async loadQuestionTypes() {
    const token = await this.storage.get('token');
    this.questionTypeService.getQuestionTypes(token).subscribe((data: QuestionTypeInterface[]) => {
      this.questionTypes = data;
    });
  }

  goToAddQuestionType() {
    this.router.navigate(['/add-question-type']);
  }

  updateQuestionType(id: any) {
    this.router.navigate(['/update-question-type', id]);
  }

  async presentDeleteAlert(questionType: QuestionTypeInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the question type <strong>${questionType.type}</strong>?`,
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
            this.deleteQuestionType(questionType.id);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteQuestionType(id: any) {
    const token = await this.storage.get('token');
    this.questionTypeService.deleteQuestionType(id, token).subscribe(types => {
      this.loadQuestionTypes();
    })
  }

}
