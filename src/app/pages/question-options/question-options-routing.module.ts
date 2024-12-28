import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionOptionsPage } from './question-options.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionOptionsPageRoutingModule {}
