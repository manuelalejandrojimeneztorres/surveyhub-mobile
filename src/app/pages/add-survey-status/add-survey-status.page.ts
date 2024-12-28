import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { SurveyStatusService } from '../../services/survey-status.service';
import { SurveyStatusInterface } from '../../interfaces/survey-status.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-survey-status',
  templateUrl: './add-survey-status.page.html',
  styleUrls: ['./add-survey-status.page.scss'],
})
export class AddSurveyStatusPage implements OnInit {

  surveyStatusForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private surveyStatusService: SurveyStatusService,
    private router: Router,
    private toastController: ToastController) {
    this.surveyStatusForm = this.formBuilder.group({
      status: ['', Validators.compose([Validators.required, Validators.maxLength(50)])]
    })
  }

  ngOnInit() {
  }

  async createSurveyStatus() {
    if (!this.surveyStatusForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.surveyStatusForm.value);

      const token = await this.storage.get('token');
      this.surveyStatusService.createSurveyStatus(this.surveyStatusForm.value, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Survey status added successfully');
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
