import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForbiddenPage } from './forbidden.page';

const routes: Routes = [
  {
    path: '',
    component: ForbiddenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForbiddenPageRoutingModule {}
