import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddQuestionPage } from './add-question.page';

const routes: Routes = [
  {
    path: '',
    component: AddQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddQuestionPageRoutingModule {}
