import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateQuestionPageRoutingModule } from './update-question-routing.module';

import { UpdateQuestionPage } from './update-question.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateQuestionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateQuestionPage]
})
export class UpdateQuestionPageModule {}
