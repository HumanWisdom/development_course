import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafePaidPageRoutingModule } from './cafe-paid-routing.module';

import { CafePaidPage } from './cafe-paid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CafePaidPageRoutingModule
  ],
  declarations: [CafePaidPage]
})
export class CafePaidPageModule {}
