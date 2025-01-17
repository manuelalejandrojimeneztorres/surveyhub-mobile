import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRolePage } from './update-role.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRolePageRoutingModule {}
