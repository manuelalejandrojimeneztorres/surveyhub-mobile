import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { QuestionTypeService } from '../../services/question-type.service';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-question-type',
  templateUrl: './add-question-type.page.html',
  styleUrls: ['./add-question-type.page.scss'],
})
export class AddQuestionTypePage implements OnInit {

  questionTypeForm: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private questionTypeService: QuestionTypeService,
    private router: Router,
    private toastController: ToastController) {
    this.questionTypeForm = this.formBuilder.group({
      type: ['', Validators.compose([Validators.required, Validators.maxLength(50)])]
    })
  }

  ngOnInit() {
  }

  async createQuestionType() {
    if (!this.questionTypeForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.questionTypeForm.value);

      const token = await this.storage.get('token');
      this.questionTypeService.createQuestionType(this.questionTypeForm.value, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Question type added successfully');
          this.router.navigate(['/question-types']);
          this.questionTypeForm.reset();
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
    return this.questionTypeForm.get(control);
  }

}
