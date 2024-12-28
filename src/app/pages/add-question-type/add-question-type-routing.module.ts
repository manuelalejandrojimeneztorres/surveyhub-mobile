import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddQuestionTypePage } from './add-question-type.page';

const routes: Routes = [
  {
    path: '',
    component: AddQuestionTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddQuestionTypePageRoutingModule {}
