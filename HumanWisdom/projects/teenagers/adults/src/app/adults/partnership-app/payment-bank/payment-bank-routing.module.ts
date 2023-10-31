import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentBankPage } from './payment-bank.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentBankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentBankPageRoutingModule {}
