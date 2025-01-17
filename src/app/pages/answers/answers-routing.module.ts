import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswersPage } from './answers.page';

const routes: Routes = [
  {
    path: '',
    component: AnswersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswersPageRoutingModule {}
