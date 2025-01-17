import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddResponsePageRoutingModule } from './add-response-routing.module';

import { AddResponsePage } from './add-response.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddResponsePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddResponsePage]
})
export class AddResponsePageModule { }
