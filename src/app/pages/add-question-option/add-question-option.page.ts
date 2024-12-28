import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { QuestionOptionService } from '../../services/question-option.service';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-question-option',
  templateUrl: './add-question-option.page.html',
  styleUrls: ['./add-question-option.page.scss'],
})
export class AddQuestionOptionPage implements OnInit {

  questionOptionForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private questionOptionService: QuestionOptionService,
    private router: Router,
    private toastController: ToastController) {
    this.questionOptionForm = this.formBuilder.group({
      questionId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      order: ['', Validators.compose([Validators.required, Validators.min(1)])],
      value: ['', Validators.compose([Validators.required, Validators.maxLength(255)])]
    })
  }

  ngOnInit() {
  }

  async submitQuestionOptionForm() {
    if (!this.questionOptionForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.questionOptionForm.value);

      const token = await this.storage.get('token');
      this.questionOptionService.createQuestionOption(this.questionOptionForm.value, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Question option added successfully');
          this.router.navigate(['/question-options']);
          this.questionOptionForm.reset();
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
    return this.questionOptionForm.get(control);
  }

}
