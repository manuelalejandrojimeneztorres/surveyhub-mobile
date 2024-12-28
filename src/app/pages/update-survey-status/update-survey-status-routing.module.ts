import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSurveyStatusPage } from './update-survey-status.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSurveyStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSurveyStatusPageRoutingModule {}
