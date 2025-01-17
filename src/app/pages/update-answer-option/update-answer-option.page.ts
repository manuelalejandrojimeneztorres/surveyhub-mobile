import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { AnswerOptionService } from '../../services/answer-option.service';
import { AnswerOptionInterface } from '../../interfaces/answer-option.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-update-answer-option',
  templateUrl: './update-answer-option.page.html',
  styleUrls: ['./update-answer-option.page.scss'],
})
export class UpdateAnswerOptionPage implements OnInit {

  answerOptionForm: FormGroup;
  isLoading = false;
  answerOptionId: any;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private answerOptionService: AnswerOptionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController) {
    this.answerOptionForm = this.formBuilder.group({
      answerId: ['', Validators.compose([Validators.required, Validators.min(1)])],
      questionOptionId: ['', Validators.compose([Validators.required, Validators.min(1)])]
    })
  }

  async ngOnInit() {
    this.answerOptionId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadAnswerOption();
  }

  async loadAnswerOption() {
    const token = await this.storage.get('token');
    this.answerOptionService.getAnswerOptionById(this.answerOptionId, token).subscribe((response: AnswerOptionInterface) => {
      this.answerOptionForm.patchValue({
        answerId: response.answerId,
        questionOptionId: response.questionOptionId
      });
    });
  }

  async submitAnswerOptionForm() {
    if (!this.answerOptionForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.answerOptionForm.value);

      const updatedAnswerOption = this.answerOptionForm.value;
      const token = await this.storage.get('token');
      this.answerOptionService.updateAnswerOption(this.answerOptionId, updatedAnswerOption, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Answer option updated successfully');
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
