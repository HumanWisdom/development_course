import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeLimitPageRoutingModule } from './free-limit-routing.module';

import { FreeLimitPage } from './free-limit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreeLimitPageRoutingModule
  ],
  declarations: [FreeLimitPage]
})
export class FreeLimitPageModule {}
