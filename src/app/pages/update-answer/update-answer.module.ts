import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAnswerPageRoutingModule } from './update-answer-routing.module';

import { UpdateAnswerPage } from './update-answer.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAnswerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateAnswerPage]
})
export class UpdateAnswerPageModule {}
