import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { QuestionService } from '../../services/question.service';
import { QuestionInterface } from '../../interfaces/question.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.page.html',
  styleUrls: ['./update-question.page.scss'],
})
export class UpdateQuestionPage implements OnInit {

  questionForm: FormGroup;
  isLoading = false;
  questionId: any;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController) {
    this.questionForm = this.formBuilder.group({
      surveyId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      questionTypeId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      order: ['', Validators.compose([Validators.required, Validators.min(1)])],
      text: ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
      isMandatory: ['', Validators.compose([Validators.required, Validators.maxLength(3)])]
    })
  }

  async ngOnInit() {
    this.questionId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadQuestion();
  }

  async loadQuestion() {
    const token = await this.storage.get('token');
    this.questionService.getQuestionById(this.questionId, token).subscribe((response: QuestionInterface) => {
      this.questionForm.patchValue({
        surveyId: response.surveyId,
        questionTypeId: response.questionTypeId,
        order: response.order,
        text: response.text,
        isMandatory: response.isMandatory
      });
    });
  }

  async submitQuestionForm() {
    if (!this.questionForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.questionForm.value);

      const updatedQuestion = this.questionForm.value;
      const token = await this.storage.get('token');
      this.questionService.updateQuestion(this.questionId, updatedQuestion, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Question updated successfully');
          this.router.navigate(['/questions']);
          this.questionForm.reset();
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
    return this.questionForm.get(control);
  }

}
