import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddResponsePage } from './add-response.page';

const routes: Routes = [
  {
    path: '',
    component: AddResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddResponsePageRoutingModule {}
