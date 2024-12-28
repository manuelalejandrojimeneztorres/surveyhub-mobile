import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSystemUserPage } from './add-system-user.page';

const routes: Routes = [
  {
    path: '',
    component: AddSystemUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSystemUserPageRoutingModule {}
