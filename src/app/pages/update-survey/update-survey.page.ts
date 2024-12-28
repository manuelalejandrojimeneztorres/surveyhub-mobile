import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { SurveyService } from '../../services/survey.service';
import { SurveyInterface } from '../../interfaces/survey.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-update-survey',
  templateUrl: './update-survey.page.html',
  styleUrls: ['./update-survey.page.scss'],
})
export class UpdateSurveyPage implements OnInit {

  surveyForm: FormGroup;
  isLoading = false;
  surveyId: any;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private surveyService: SurveyService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
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

  async ngOnInit() {
    this.surveyId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadSurvey();
  }

  async loadSurvey() {
    const token = await this.storage.get('token');
    this.surveyService.getSurveyById(this.surveyId, token).subscribe((response: SurveyInterface) => {
      this.surveyForm.patchValue({
        name: response.name,
        description: response.description,
        startDate: response.startDate,
        endDate: response.endDate,
        minResponses: response.minResponses,
        maxResponses: response.maxResponses,
        surveyStatusId: response.surveyStatusId
      });
    });
  }

  async updateSurvey() {
    if (!this.surveyForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.surveyForm.value);

      const updatedSurvey = this.surveyForm.value;
      const token = await this.storage.get('token');
      this.surveyService.updateSurvey(this.surveyId, updatedSurvey, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Survey updated successfully');
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
