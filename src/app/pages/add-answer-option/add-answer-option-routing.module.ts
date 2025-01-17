import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnswerOptionPage } from './add-answer-option.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnswerOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnswerOptionPageRoutingModule {}
