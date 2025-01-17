import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { AnswerService } from '../../services/answer.service';
import { AnswerInterface } from '../../interfaces/answer.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-update-answer',
  templateUrl: './update-answer.page.html',
  styleUrls: ['./update-answer.page.scss'],
})
export class UpdateAnswerPage implements OnInit {

  answerForm: FormGroup;
  isLoading = false;
  answerId: any;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private answerService: AnswerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController) {
    this.answerForm = this.formBuilder.group({
      questionId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      responseId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      answer: ['', Validators.compose([Validators.maxLength(255)])]
    })
  }

  async ngOnInit() {
    this.answerId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadAnswer();
  }

  async loadAnswer() {
    const token = await this.storage.get('token');
    this.answerService.getAnswerById(this.answerId, token).subscribe((response: AnswerInterface) => {
      this.answerForm.patchValue({
        questionId: response.questionId,
        responseId: response.responseId,
        answer: response.answer
      });
    });
  }

  async submitAnswerForm() {
    if (!this.answerForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.answerForm.value);

      const updatedAnswer = this.answerForm.value;
      const token = await this.storage.get('token');
      this.answerService.updateAnswer(this.answerId, updatedAnswer, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Answer updated successfully');
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
