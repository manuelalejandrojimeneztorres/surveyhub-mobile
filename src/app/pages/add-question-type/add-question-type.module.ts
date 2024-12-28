import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddQuestionTypePageRoutingModule } from './add-question-type-routing.module';

import { AddQuestionTypePage } from './add-question-type.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddQuestionTypePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddQuestionTypePage]
})
export class AddQuestionTypePageModule { }
