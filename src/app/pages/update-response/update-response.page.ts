import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { ResponseService } from '../../services/response.service';
import { ResponseInterface } from '../../interfaces/response.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-update-response',
  templateUrl: './update-response.page.html',
  styleUrls: ['./update-response.page.scss'],
})
export class UpdateResponsePage implements OnInit {

  responseForm: FormGroup;
  isLoading = false;
  responseId: any;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private responseService: ResponseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController) {
    this.responseForm = this.formBuilder.group({
      surveyId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      systemUserId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      beginDate: ['', Validators.compose([Validators.required])],
      endDate: ['']
    })
  }

  async ngOnInit() {
    this.responseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadResponse();
  }

  async loadResponse() {
    const token = await this.storage.get('token');
    this.responseService.getResponseById(this.responseId, token).subscribe((response: ResponseInterface) => {
      this.responseForm.patchValue({
        surveyId: response.surveyId,
        systemUserId: response.systemUserId,
        beginDate: response.beginDate,
        endDate: response.endDate
      });
    });
  }

  async submitResponseForm() {
    if (!this.responseForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.responseForm.value);

      const updatedResponse = this.responseForm.value;
      const token = await this.storage.get('token');
      this.responseService.updateResponse(this.responseId, updatedResponse, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Response updated successfully');
          this.router.navigate(['/responses']);
          this.responseForm.reset();
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
    return this.responseForm.get(control);
  }

}
