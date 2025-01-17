import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemUserRolesPageRoutingModule } from './system-user-roles-routing.module';

import { SystemUserRolesPage } from './system-user-roles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemUserRolesPageRoutingModule
  ],
  declarations: [SystemUserRolesPage]
})
export class SystemUserRolesPageModule {}
