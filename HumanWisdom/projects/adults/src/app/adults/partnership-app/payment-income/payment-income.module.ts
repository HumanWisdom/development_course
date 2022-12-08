import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentIncomePageRoutingModule } from './payment-income-routing.module';

import { PaymentIncomePage } from './payment-income.page';

import { SharedModule } from '../../../../../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentIncomePageRoutingModule,
    SharedModule
  ],
  declarations: [PaymentIncomePage]
})
export class PaymentIncomePageModule {}
