import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedeemSubscriptionPage } from './redeem-subscription.page';


const routes: Routes = [
  {
    path: '',
    component: RedeemSubscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemSubscriptionPageRoutingModule {}
