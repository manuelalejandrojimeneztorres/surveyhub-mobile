import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { SurveyService } from '../../services/survey.service';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.page.html',
  styleUrls: ['./add-survey.page.scss'],
})
export class AddSurveyPage implements OnInit {

  surveyForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private surveyService: SurveyService,
    private router: Router,
    private toastController: ToastController) {
    this.surveyForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
      description: ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
      startDate: ['', Validators.compose([Validators.required])],
      endDate: [''],
      minResponses: ['', Validators.compose([Validators.min(0)])],
      maxResponses: ['', Validators.compose([Validators.min(0)])],
      surveyStatusId: ['', Validators.compose([Validators.required, Validators.min(1)])]
    })
  }

  ngOnInit() {
  }

  async createSurvey() {
    if (!this.surveyForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.surveyForm.value);

      const token = await this.storage.get('token');
      this.surveyService.createSurvey(this.surveyForm.value, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Survey added successfully');
          this.router.navigate(['/surveys']);
          this.surveyForm.reset();
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
    return this.surveyForm.get(control);
  }

}
