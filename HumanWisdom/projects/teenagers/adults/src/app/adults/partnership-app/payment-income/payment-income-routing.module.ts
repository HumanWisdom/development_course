import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentIncomePage } from './payment-income.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentIncomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentIncomePageRoutingModule {}
