import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSurveyPage } from './add-survey.page';

const routes: Routes = [
  {
    path: '',
    component: AddSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSurveyPageRoutingModule {}
