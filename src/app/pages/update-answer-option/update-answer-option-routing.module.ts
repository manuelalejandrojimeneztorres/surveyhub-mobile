import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAnswerOptionPage } from './update-answer-option.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAnswerOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAnswerOptionPageRoutingModule {}
