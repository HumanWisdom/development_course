import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProceedToPaymentPageRoutingModule } from './proceed-to-payment-routing.module';

import { ProceedToPaymentPage } from './proceed-to-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProceedToPaymentPageRoutingModule
  ],
  declarations: [ProceedToPaymentPage]
})
export class ProceedToPaymentPageModule {}
