import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemSubscriptionLandingPageRoutingModule } from './redeem-subscription-landing-routing.module';

import { RedeemSubscriptionLandingPage } from './redeem-subscription-landing.page';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemSubscriptionLandingPageRoutingModule,
    SharedModule
  ],
  declarations: [RedeemSubscriptionLandingPage]
})
export class RedeemSubscriptionLandingPageModule {}
