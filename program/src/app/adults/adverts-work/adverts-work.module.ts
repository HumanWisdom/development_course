import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsWorkPageRoutingModule } from './adverts-work-routing.module';

import { AdvertsWorkPage } from './adverts-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertsWorkPageRoutingModule
  ],
  declarations: [AdvertsWorkPage]
})
export class AdvertsWorkPageModule {}
