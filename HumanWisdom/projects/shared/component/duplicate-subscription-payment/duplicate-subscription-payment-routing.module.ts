import { DuplicateSubscriptionPaymentComponent } from './duplicate-subscription-payment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DuplicateSubscriptionPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuplicateSubscriptionPaymentRoutingModule { }
