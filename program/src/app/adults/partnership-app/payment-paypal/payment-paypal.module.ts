import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPaypalPageRoutingModule } from './payment-paypal-routing.module';

import { PaymentPaypalPage } from './payment-paypal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPaypalPageRoutingModule
  ],
  declarations: [PaymentPaypalPage]
})
export class PaymentPaypalPageModule {}
