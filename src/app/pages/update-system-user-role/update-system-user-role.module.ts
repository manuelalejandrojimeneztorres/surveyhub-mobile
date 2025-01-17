import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSystemUserRolePageRoutingModule } from './update-system-user-role-routing.module';

import { UpdateSystemUserRolePage } from './update-system-user-role.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSystemUserRolePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateSystemUserRolePage]
})
export class UpdateSystemUserRolePageModule {}
