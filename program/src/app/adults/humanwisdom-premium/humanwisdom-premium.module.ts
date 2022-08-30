import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HumanwisdomPremiumPageRoutingModule } from './humanwisdom-premium-routing.module';

import { HumanwisdomPremiumPage } from './humanwisdom-premium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HumanwisdomPremiumPageRoutingModule
  ],
  declarations: [HumanwisdomPremiumPage]
})
export class HumanwisdomPremiumPageModule {}
