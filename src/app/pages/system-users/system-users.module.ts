import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemUsersPageRoutingModule } from './system-users-routing.module';

import { SystemUsersPage } from './system-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemUsersPageRoutingModule
  ],
  declarations: [SystemUsersPage]
})
export class SystemUsersPageModule {}
