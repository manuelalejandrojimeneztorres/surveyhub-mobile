import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSurveyPage } from './update-survey.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSurveyPageRoutingModule {}
