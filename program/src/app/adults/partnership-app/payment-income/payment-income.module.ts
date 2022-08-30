import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentIncomePageRoutingModule } from './payment-income-routing.module';

import { PaymentIncomePage } from './payment-income.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentIncomePageRoutingModule
  ],
  declarations: [PaymentIncomePage]
})
export class PaymentIncomePageModule {}
