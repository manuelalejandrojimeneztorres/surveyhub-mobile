import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActionSheetController, AlertController } from '@ionic/angular';
import { SurveyService } from '../../services/survey.service';
import { SurveyInterface } from '../../interfaces/survey.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.page.html',
  styleUrls: ['./surveys.page.scss'],
})
export class SurveysPage implements OnInit {

  surveys: SurveyInterface[] = [];

  constructor(private authService: AuthService,
    private storage: Storage,
    private surveyService: SurveyService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private router: Router) { }

  async ngOnInit() {
    this.loadSurveys();
  }

  ionViewWillEnter() {
    this.loadSurveys();
  }

  async loadSurveys() {
    const token = await this.storage.get('token');
    this.surveyService.getSurveys(token).subscribe((data: SurveyInterface[]) => {
      this.surveys = data;
    });
  }

  async presentActionSheet(survey: SurveyInterface) {
    const actionSheet = await this.actionSheetController.create({
      header: survey.name,
      buttons: [
        {
          text: 'Update',
          icon: 'pencil',
          handler: () => {
            this.updateSurvey(survey.id);
          },
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.presentDeleteAlert(survey);
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

  goToAddSurvey() {
    this.router.navigate(['/add-survey']);
  }

  updateSurvey(id: any) {
    this.router.navigate(['/update-survey', id]);
  }

  async presentDeleteAlert(survey: SurveyInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the survey <strong>${survey.name}</strong>?`,
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
            this.deleteSurvey(survey.id);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteSurvey(id: any) {
    const token = await this.storage.get('token');
    this.surveyService.deleteSurvey(id, token).subscribe(surveys => {
      this.loadSurveys();
    })
  }

}
