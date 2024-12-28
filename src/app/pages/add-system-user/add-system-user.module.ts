import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSystemUserPageRoutingModule } from './add-system-user-routing.module';

import { AddSystemUserPage } from './add-system-user.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSystemUserPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddSystemUserPage]
})
export class AddSystemUserPageModule { }
