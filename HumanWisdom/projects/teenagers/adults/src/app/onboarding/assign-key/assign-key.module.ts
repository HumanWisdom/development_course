import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignKeyPageRoutingModule } from './assign-key-routing.module';

import { AssignKeyPage } from './assign-key.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignKeyPageRoutingModule
  ],
  declarations: [AssignKeyPage]
})
export class AssignKeyPageModule {}
