import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPaypalPageRoutingModule } from './payment-paypal-routing.module';

import { PaymentPaypalPage } from './payment-paypal.page';

import { SharedModule } from '../../../../../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPaypalPageRoutingModule,
    SharedModule
  ],
  declarations: [PaymentPaypalPage]
})
export class PaymentPaypalPageModule {}
