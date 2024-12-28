import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateQuestionTypePage } from './update-question-type.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateQuestionTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateQuestionTypePageRoutingModule {}
