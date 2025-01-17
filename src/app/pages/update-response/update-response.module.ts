import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateResponsePageRoutingModule } from './update-response-routing.module';

import { UpdateResponsePage } from './update-response.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateResponsePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateResponsePage]
})
export class UpdateResponsePageModule {}
