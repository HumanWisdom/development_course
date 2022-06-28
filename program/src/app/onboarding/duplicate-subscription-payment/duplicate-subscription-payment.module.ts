import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuplicateSubscriptionPaymentRoutingModule } from './duplicate-subscription-payment-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/adults/shared/shared.module';
import { DuplicateSubscriptionPaymentComponent } from './duplicate-subscription-payment.component';


@NgModule({
  declarations: [DuplicateSubscriptionPaymentComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DuplicateSubscriptionPaymentRoutingModule
  ]
})
export class DuplicateSubscriptionPaymentModule { }
