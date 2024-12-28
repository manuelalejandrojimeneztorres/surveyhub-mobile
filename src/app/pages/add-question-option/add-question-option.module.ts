import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddQuestionOptionPageRoutingModule } from './add-question-option-routing.module';

import { AddQuestionOptionPage } from './add-question-option.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddQuestionOptionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddQuestionOptionPage]
})
export class AddQuestionOptionPageModule {}
