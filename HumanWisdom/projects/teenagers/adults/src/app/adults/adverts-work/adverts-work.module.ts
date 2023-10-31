import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsWorkPageRoutingModule } from './adverts-work-routing.module';

import { AdvertsWorkPage } from './adverts-work.page';

import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertsWorkPageRoutingModule,
    SharedModule
  ],
  declarations: [AdvertsWorkPage]
})
export class AdvertsWorkPageModule {}
