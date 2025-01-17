import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnswersPageRoutingModule } from './answers-routing.module';

import { AnswersPage } from './answers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnswersPageRoutingModule
  ],
  declarations: [AnswersPage]
})
export class AnswersPageModule {}
