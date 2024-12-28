import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateQuestionPage } from './update-question.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateQuestionPageRoutingModule {}
