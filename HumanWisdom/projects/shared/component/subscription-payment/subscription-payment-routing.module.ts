import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionPaymentPage } from './subscription-payment.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionPaymentPageRoutingModule {}
