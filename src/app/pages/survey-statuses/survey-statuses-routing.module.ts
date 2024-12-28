import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyStatusesPage } from './survey-statuses.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyStatusesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyStatusesPageRoutingModule {}
