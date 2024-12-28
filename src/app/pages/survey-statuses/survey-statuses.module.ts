import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyStatusesPageRoutingModule } from './survey-statuses-routing.module';

import { SurveyStatusesPage } from './survey-statuses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyStatusesPageRoutingModule
  ],
  declarations: [SurveyStatusesPage]
})
export class SurveyStatusesPageModule {}
