import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSystemUserPageRoutingModule } from './update-system-user-routing.module';

import { UpdateSystemUserPage } from './update-system-user.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSystemUserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateSystemUserPage]
})
export class UpdateSystemUserPageModule { }
