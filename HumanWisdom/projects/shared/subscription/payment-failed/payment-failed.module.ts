import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentFailedPageRoutingModule } from './payment-failed-routing.module';

import { PaymentFailedPage } from './payment-failed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentFailedPageRoutingModule
  ],
  declarations: [PaymentFailedPage]
})
export class PaymentFailedPageModule {}
