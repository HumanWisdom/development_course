import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionPaymentPageRoutingModule } from './subscription-payment-routing.module';

import { SubscriptionPaymentPage } from './subscription-payment.page';

import { SharedModule } from '../../../../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionPaymentPageRoutingModule,
    SharedModule
  ],
  declarations: [SubscriptionPaymentPage]
})
export class SubscriptionPaymentPageModule {}
