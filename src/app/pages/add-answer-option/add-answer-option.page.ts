import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AnswerOptionService } from '../../services/answer-option.service';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-answer-option',
  templateUrl: './add-answer-option.page.html',
  styleUrls: ['./add-answer-option.page.scss'],
})
export class AddAnswerOptionPage implements OnInit {

  answerOptionForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private answerOptionService: AnswerOptionService,
    private router: Router,
    private toastController: ToastController) {
    this.answerOptionForm = this.formBuilder.group({
      answerId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      questionOptionId: ['', Validators.compose([Validators.required, Validators.min(1)])]
    })
  }

  ngOnInit() {
  }

  async submitAnswerOptionForm() {
    if (!this.answerOptionForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.answerOptionForm.value);

      const token = await this.storage.get('token');
      this.answerOptionService.createAnswerOption(this.answerOptionForm.value, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Answer option added successfully');
          this.router.navigate(['/answer-options']);
          this.answerOptionForm.reset();
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
    return this.answerOptionForm.get(control);
  }

}
