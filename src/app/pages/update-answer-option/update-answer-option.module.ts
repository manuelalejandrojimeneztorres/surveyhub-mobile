import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAnswerOptionPageRoutingModule } from './update-answer-option-routing.module';

import { UpdateAnswerOptionPage } from './update-answer-option.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAnswerOptionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateAnswerOptionPage]
})
export class UpdateAnswerOptionPageModule {}
