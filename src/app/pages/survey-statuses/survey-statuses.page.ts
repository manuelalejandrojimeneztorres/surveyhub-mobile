import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { SurveyStatusService } from '../../services/survey-status.service';
import { SurveyStatusInterface } from '../../interfaces/survey-status.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-survey-statuses',
  templateUrl: './survey-statuses.page.html',
  styleUrls: ['./survey-statuses.page.scss'],
})
export class SurveyStatusesPage implements OnInit {

  surveyStatuses: SurveyStatusInterface[] = [];

  constructor(private authService: AuthService,
    private storage: Storage,
    private surveyStatusService: SurveyStatusService,
    private alertController: AlertController,
    private router: Router) { }

  async ngOnInit() {
    this.loadSurveyStatuses();
  }

  ionViewWillEnter() {
    this.loadSurveyStatuses();
  }

  async loadSurveyStatuses() {
    const token = await this.storage.get('token');
    this.surveyStatusService.getSurveyStatuses(token).subscribe((data: SurveyStatusInterface[]) => {
      this.surveyStatuses = data;
    });
  }

  goToAddSurveyStatus() {
    this.router.navigate(['/add-survey-status']);
  }

  updateSurveyStatus(id: any) {
    this.router.navigate(['/update-survey-status', id]);
  }

  async presentDeleteAlert(surveyStatus: SurveyStatusInterface) {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete the survey status <strong>${surveyStatus.status}</strong>?`,
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
            this.deleteSurveyStatus(surveyStatus.id);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteSurveyStatus(id: any) {
    const token = await this.storage.get('token');
    this.surveyStatusService.deleteSurveyStatus(id, token).subscribe(statuses => {
      this.loadSurveyStatuses();
    })
  }

}
