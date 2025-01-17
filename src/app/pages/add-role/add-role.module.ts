import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRolePageRoutingModule } from './add-role-routing.module';

import { AddRolePage } from './add-role.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRolePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddRolePage]
})
export class AddRolePageModule { }
