import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemActivateNowPage } from './redeem-activate-now.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemActivateNowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemActivateNowPageRoutingModule {}
