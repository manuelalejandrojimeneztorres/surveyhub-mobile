import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateQuestionTypePageRoutingModule } from './update-question-type-routing.module';

import { UpdateQuestionTypePage } from './update-question-type.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateQuestionTypePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateQuestionTypePage]
})
export class UpdateQuestionTypePageModule {}
