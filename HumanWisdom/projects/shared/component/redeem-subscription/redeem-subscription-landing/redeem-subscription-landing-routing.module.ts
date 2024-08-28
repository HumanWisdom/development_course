import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemSubscriptionLandingPage } from './redeem-subscription-landing.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemSubscriptionLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemSubscriptionLandingPageRoutingModule {}
