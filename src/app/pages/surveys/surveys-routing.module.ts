import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveysPage } from './surveys.page';

const routes: Routes = [
  {
    path: '',
    component: SurveysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveysPageRoutingModule {}
