import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSystemUserPage } from './update-system-user.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSystemUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSystemUserPageRoutingModule {}
