import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { SurveyStatusService } from '../../services/survey-status.service';
import { SurveyStatusInterface } from '../../interfaces/survey-status.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-update-survey-status',
  templateUrl: './update-survey-status.page.html',
  styleUrls: ['./update-survey-status.page.scss'],
})
export class UpdateSurveyStatusPage implements OnInit {

  surveyStatusForm: FormGroup;
  isLoading = false;
  surveyStatusId: any;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private surveyStatusService: SurveyStatusService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController) {
    this.surveyStatusForm = this.formBuilder.group({
      status: ['', Validators.compose([Validators.required, Validators.maxLength(50)])]
    })
  }

  async ngOnInit() {
    this.surveyStatusId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadSurveyStatus();
  }

  async loadSurveyStatus() {
    const token = await this.storage.get('token');
    this.surveyStatusService.getSurveyStatusById(this.surveyStatusId, token).subscribe((response: SurveyStatusInterface) => {
      this.surveyStatusForm.patchValue({
        status: response.status
      });
    });
  }

  async updateSurveyStatus() {
    if (!this.surveyStatusForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.surveyStatusForm.value);

      const updatedSurveyStatus = this.surveyStatusForm.value;
      const token = await this.storage.get('token');
      this.surveyStatusService.updateSurveyStatus(this.surveyStatusId, updatedSurveyStatus, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Survey status updated successfully');
          this.router.navigate(['/survey-statuses']);
          this.surveyStatusForm.reset();
        },
        error: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission failed. Please try again.',
            color: 'danger',
            duration: 2000,
          });
          toast.present();
        }
      });
    }
  }

  getFormControl(control: string) {
    return this.surveyStatusForm.get(control);
  }

}
