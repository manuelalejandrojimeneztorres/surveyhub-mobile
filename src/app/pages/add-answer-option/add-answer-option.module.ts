import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnswerOptionPageRoutingModule } from './add-answer-option-routing.module';

import { AddAnswerOptionPage } from './add-answer-option.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnswerOptionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddAnswerOptionPage]
})
export class AddAnswerOptionPageModule { }
