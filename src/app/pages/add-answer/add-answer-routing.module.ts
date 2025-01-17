import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnswerPage } from './add-answer.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnswerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnswerPageRoutingModule {}
