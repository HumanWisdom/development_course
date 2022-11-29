import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsAboutPageRoutingModule } from './adverts-about-routing.module';

import { AdvertsAboutPage } from './adverts-about.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertsAboutPageRoutingModule,
    SharedModule
  ],
  declarations: [AdvertsAboutPage]
})
export class AdvertsAboutPageModule {}
