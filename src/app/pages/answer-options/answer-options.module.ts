import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnswerOptionsPageRoutingModule } from './answer-options-routing.module';

import { AnswerOptionsPage } from './answer-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnswerOptionsPageRoutingModule
  ],
  declarations: [AnswerOptionsPage]
})
export class AnswerOptionsPageModule {}
