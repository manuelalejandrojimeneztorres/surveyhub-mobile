import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRolePageRoutingModule } from './update-role-routing.module';

import { UpdateRolePage } from './update-role.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateRolePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateRolePage]
})
export class UpdateRolePageModule {}
