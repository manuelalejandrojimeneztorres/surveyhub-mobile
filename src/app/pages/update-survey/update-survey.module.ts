import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSurveyPageRoutingModule } from './update-survey-routing.module';

import { UpdateSurveyPage } from './update-survey.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSurveyPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateSurveyPage]
})
export class UpdateSurveyPageModule {}
