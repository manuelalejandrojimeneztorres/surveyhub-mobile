import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSystemUserRolePageRoutingModule } from './add-system-user-role-routing.module';

import { AddSystemUserRolePage } from './add-system-user-role.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSystemUserRolePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddSystemUserRolePage]
})
export class AddSystemUserRolePageModule { }
