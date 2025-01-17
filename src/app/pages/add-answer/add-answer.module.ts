import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnswerPageRoutingModule } from './add-answer-routing.module';

import { AddAnswerPage } from './add-answer.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnswerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddAnswerPage]
})
export class AddAnswerPageModule { }
