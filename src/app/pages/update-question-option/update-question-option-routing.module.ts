import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateQuestionOptionPage } from './update-question-option.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateQuestionOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateQuestionOptionPageRoutingModule {}
