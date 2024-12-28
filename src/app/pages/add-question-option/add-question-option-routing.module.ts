import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddQuestionOptionPage } from './add-question-option.page';

const routes: Routes = [
  {
    path: '',
    component: AddQuestionOptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddQuestionOptionPageRoutingModule {}
