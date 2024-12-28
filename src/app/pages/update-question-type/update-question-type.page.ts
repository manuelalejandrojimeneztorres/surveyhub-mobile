import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { QuestionTypeService } from '../../services/question-type.service';
import { QuestionTypeInterface } from '../../interfaces/question-type.interface';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-update-question-type',
  templateUrl: './update-question-type.page.html',
  styleUrls: ['./update-question-type.page.scss'],
})
export class UpdateQuestionTypePage implements OnInit {

  questionTypeForm: FormGroup;
  isLoading = false;
  questionTypeId: any;

  constructor(private authService: AuthService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private questionTypeService: QuestionTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController) {
    this.questionTypeForm = this.formBuilder.group({
      type: ['', Validators.compose([Validators.required, Validators.maxLength(50)])]
    })
  }

  async ngOnInit() {
    this.questionTypeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadQuestionType();
  }

  async loadQuestionType() {
    const token = await this.storage.get('token');
    this.questionTypeService.getQuestionTypeById(this.questionTypeId, token).subscribe((response: QuestionTypeInterface) => {
      this.questionTypeForm.patchValue({
        type: response.type
      });
    });
  }

  async updateQuestionType() {
    if (!this.questionTypeForm.valid) {
      console.log('Invalid form');
      return;

    } else {
      this.isLoading = true;
      console.log('Valid form:', this.questionTypeForm.value);

      const updatedQuestionType = this.questionTypeForm.value;
      const token = await this.storage.get('token');
      this.questionTypeService.updateQuestionType(this.questionTypeId, updatedQuestionType, token).subscribe({
        next: async () => {
          this.isLoading = false;
          const toast = await this.toastController.create({
            message: 'Submission successful!',
            color: 'success',
            duration: 2000,
          });
          toast.present();

          console.log('Question type updated successfully');
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
