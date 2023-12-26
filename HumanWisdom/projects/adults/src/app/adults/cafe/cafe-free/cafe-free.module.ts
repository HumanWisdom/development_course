import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafeFreePageRoutingModule } from './cafe-free-routing.module';

import { CafeFreePage } from './cafe-free.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CafeFreePageRoutingModule
  ],
  declarations: [CafeFreePage]
})
export class CafeFreePageModule {}
