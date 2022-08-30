import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HwpPremiumCongratulationsPageRoutingModule } from './hwp-premium-congratulations-routing.module';

import { HwpPremiumCongratulationsPage } from './hwp-premium-congratulations.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HwpPremiumCongratulationsPageRoutingModule,
    SharedModule
  ],
  declarations: [HwpPremiumCongratulationsPage]
})
export class HwpPremiumCongratulationsPageModule {}
