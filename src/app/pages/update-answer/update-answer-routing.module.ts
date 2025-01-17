import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAnswerPage } from './update-answer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAnswerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAnswerPageRoutingModule {}
