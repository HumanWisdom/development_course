import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemSubscriptionLandingPageRoutingModule } from './redeem-subscription-landing-routing.module';

import { RedeemSubscriptionLandingPage } from './redeem-subscription-landing.page';
import { SharedModule } from '../../../../shared/shared.module';
import { LoginRegisterModalComponent } from '../../login-register-modal/login-register-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemSubscriptionLandingPageRoutingModule,
    SharedModule,
    LoginRegisterModalComponent
  ],
  declarations: [RedeemSubscriptionLandingPage]
})
export class RedeemSubscriptionLandingPageModule {}
