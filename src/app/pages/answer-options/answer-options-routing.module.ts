import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswerOptionsPage } from './answer-options.page';

const routes: Routes = [
  {
    path: '',
    component: AnswerOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswerOptionsPageRoutingModule {}
