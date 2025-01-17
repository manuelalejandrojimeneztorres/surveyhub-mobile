import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponsesPageRoutingModule } from './responses-routing.module';

import { ResponsesPage } from './responses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponsesPageRoutingModule
  ],
  declarations: [ResponsesPage]
})
export class ResponsesPageModule {}
