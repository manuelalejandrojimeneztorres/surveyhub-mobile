import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateResponsePage } from './update-response.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateResponsePageRoutingModule {}
