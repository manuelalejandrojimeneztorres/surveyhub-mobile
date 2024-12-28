import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSurveyStatusPageRoutingModule } from './add-survey-status-routing.module';

import { AddSurveyStatusPage } from './add-survey-status.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSurveyStatusPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddSurveyStatusPage]
})
export class AddSurveyStatusPageModule {}
