import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponsesPage } from './responses.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsesPageRoutingModule {}
