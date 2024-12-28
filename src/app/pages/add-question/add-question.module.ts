import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddQuestionPageRoutingModule } from './add-question-routing.module';

import { AddQuestionPage } from './add-question.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddQuestionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddQuestionPage]
})
export class AddQuestionPageModule {}
