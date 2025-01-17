import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSystemUserRolePage } from './add-system-user-role.page';

const routes: Routes = [
  {
    path: '',
    component: AddSystemUserRolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSystemUserRolePageRoutingModule {}
