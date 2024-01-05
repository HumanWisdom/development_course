import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemSubscriptionLandingPageRoutingModule } from './redeem-subscription-landing-routing.module';

import { RedeemSubscriptionLandingPage } from './redeem-subscription-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemSubscriptionLandingPageRoutingModule
  ],
  declarations: [RedeemSubscriptionLandingPage]
})
export class RedeemSubscriptionLandingPageModule {}
