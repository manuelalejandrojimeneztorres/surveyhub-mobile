import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSystemUserRolePage } from './update-system-user-role.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSystemUserRolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSystemUserRolePageRoutingModule {}
