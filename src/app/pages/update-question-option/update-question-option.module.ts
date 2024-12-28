import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateQuestionOptionPageRoutingModule } from './update-question-option-routing.module';

import { UpdateQuestionOptionPage } from './update-question-option.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateQuestionOptionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateQuestionOptionPage]
})
export class UpdateQuestionOptionPageModule {}
