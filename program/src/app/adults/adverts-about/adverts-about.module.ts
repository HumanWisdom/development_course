import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsAboutPageRoutingModule } from './adverts-about-routing.module';

import { AdvertsAboutPage } from './adverts-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertsAboutPageRoutingModule
  ],
  declarations: [AdvertsAboutPage]
})
export class AdvertsAboutPageModule {}
