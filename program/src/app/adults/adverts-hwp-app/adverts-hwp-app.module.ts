import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsHwpAppPageRoutingModule } from './adverts-hwp-app-routing.module';

import { AdvertsHwpAppPage } from './adverts-hwp-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertsHwpAppPageRoutingModule
  ],
  declarations: [AdvertsHwpAppPage]
})
export class AdvertsHwpAppPageModule {}
