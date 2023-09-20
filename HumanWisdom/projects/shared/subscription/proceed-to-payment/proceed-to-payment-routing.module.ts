import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProceedToPaymentPage } from './proceed-to-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ProceedToPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProceedToPaymentPageRoutingModule {}
