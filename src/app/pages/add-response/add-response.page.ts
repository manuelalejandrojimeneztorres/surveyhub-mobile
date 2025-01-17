import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { ResponseService } from '../../services/response.service';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-response',
  templateUrl: './add-response.page.html',
  styleUrls: ['./add-response.page.scss'],
})
export class AddResponsePage implements OnInit {

  responseForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private responseService: ResponseService,
    private router: Router,
    private toastController: ToastController) {
    this.responseForm = this.formBuilder.group({
      surveyId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      systemUserId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      beginDate: ['', Validators.compose([Validators.required])],
      endDate: ['']
    })
  }

  ngOnInit() {
  }

  async submitResponseForm() {
    if (!this.responseForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.responseForm.value);

      const token = await this.storage.get('token');
      this.responseService.createResponse(this.responseForm.value, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Response added successfully');
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
