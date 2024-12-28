import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionOptionsPageRoutingModule } from './question-options-routing.module';

import { QuestionOptionsPage } from './question-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionOptionsPageRoutingModule
  ],
  declarations: [QuestionOptionsPage]
})
export class QuestionOptionsPageModule {}
