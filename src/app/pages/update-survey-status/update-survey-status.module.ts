import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSurveyStatusPageRoutingModule } from './update-survey-status-routing.module';

import { UpdateSurveyStatusPage } from './update-survey-status.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSurveyStatusPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateSurveyStatusPage]
})
export class UpdateSurveyStatusPageModule {}
