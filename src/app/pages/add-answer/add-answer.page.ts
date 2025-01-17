import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AnswerService } from '../../services/answer.service';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.page.html',
  styleUrls: ['./add-answer.page.scss'],
})
export class AddAnswerPage implements OnInit {

  answerForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private answerService: AnswerService,
    private router: Router,
    private toastController: ToastController) {
    this.answerForm = this.formBuilder.group({
      questionId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      responseId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      answer: ['', Validators.compose([Validators.maxLength(255)])]
    })
  }

  ngOnInit() {
  }

  async submitAnswerForm() {
    if (!this.answerForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.answerForm.value);

      const token = await this.storage.get('token');
      this.answerService.createAnswer(this.answerForm.value, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Answer added successfully');
          this.router.navigate(['/answers']);
          this.answerForm.reset();
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
    return this.answerForm.get(control);
  }

}
