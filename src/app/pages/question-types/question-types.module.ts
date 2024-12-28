import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionTypesPageRoutingModule } from './question-types-routing.module';

import { QuestionTypesPage } from './question-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionTypesPageRoutingModule
  ],
  declarations: [QuestionTypesPage]
})
export class QuestionTypesPageModule {}
