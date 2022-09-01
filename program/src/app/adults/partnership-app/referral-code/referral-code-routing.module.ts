import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferralCodePage } from './referral-code.page';

const routes: Routes = [
  {
    path: '',
    component: ReferralCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferralCodePageRoutingModule {}
