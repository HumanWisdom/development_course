import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentPaypalPage } from './payment-paypal.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentPaypalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPaypalPageRoutingModule {}
