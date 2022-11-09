import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsHwpPageRoutingModule } from './adverts-hwp-routing.module';

import { AdvertsHwpPage } from './adverts-hwp.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertsHwpPageRoutingModule,
    SharedModule
  ],
  declarations: [AdvertsHwpPage]
})
export class AdvertsHwpPageModule {}
