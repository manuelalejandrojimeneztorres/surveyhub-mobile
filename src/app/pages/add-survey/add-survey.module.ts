import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSurveyPageRoutingModule } from './add-survey-routing.module';

import { AddSurveyPage } from './add-survey.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSurveyPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddSurveyPage]
})
export class AddSurveyPageModule {}
