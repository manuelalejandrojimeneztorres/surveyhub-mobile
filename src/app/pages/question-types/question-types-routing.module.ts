import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionTypesPage } from './question-types.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionTypesPageRoutingModule {}
