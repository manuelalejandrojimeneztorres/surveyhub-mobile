import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { QuestionOptionService } from '../../services/question-option.service';
import { QuestionOptionInterface } from '../../interfaces/question-option.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-update-question-option',
  templateUrl: './update-question-option.page.html',
  styleUrls: ['./update-question-option.page.scss'],
})
export class UpdateQuestionOptionPage implements OnInit {

  questionOptionForm: FormGroup;
  isLoading = false;
  questionOptionId: any;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private questionOptionService: QuestionOptionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController) {
    this.questionOptionForm = this.formBuilder.group({
      questionId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      order: ['', Validators.compose([Validators.required, Validators.min(1)])],
      value: ['', Validators.compose([Validators.required, Validators.maxLength(255)])]
    })
  }

  async ngOnInit() {
    this.questionOptionId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadQuestionOption();
  }

  async loadQuestionOption() {
    const token = await this.storage.get('token');
    this.questionOptionService.getQuestionOptionById(this.questionOptionId, token).subscribe((response: QuestionOptionInterface) => {
      this.questionOptionForm.patchValue({
        questionId: response.questionId,
        order: response.order,
        value: response.value
      });
    });
  }

  async submitQuestionOptionForm() {
    if (!this.questionOptionForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.questionOptionForm.value);

      const updatedQuestionOption = this.questionOptionForm.value;
      const token = await this.storage.get('token');
      this.questionOptionService.updateQuestionOption(this.questionOptionId, updatedQuestionOption, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Question option updated successfully');
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
