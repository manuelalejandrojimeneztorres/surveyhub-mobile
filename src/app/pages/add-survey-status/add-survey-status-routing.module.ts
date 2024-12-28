import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSurveyStatusPage } from './add-survey-status.page';

const routes: Routes = [
  {
    path: '',
    component: AddSurveyStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSurveyStatusPageRoutingModule {}
