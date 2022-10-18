import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsHwpPageRoutingModule } from './adverts-hwp-routing.module';

import { AdvertsHwpPage } from './adverts-hwp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertsHwpPageRoutingModule
  ],
  declarations: [AdvertsHwpPage]
})
export class AdvertsHwpPageModule {}
