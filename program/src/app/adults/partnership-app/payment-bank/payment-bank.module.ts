import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentBankPageRoutingModule } from './payment-bank-routing.module';

import { PaymentBankPage } from './payment-bank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentBankPageRoutingModule
  ],
  declarations: [PaymentBankPage]
})
export class PaymentBankPageModule {}
