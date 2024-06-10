import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HwpPremiumCongratulationsPage } from './hwp-premium-congratulations.page';

const routes: Routes = [
  {
    path: '',
    component: HwpPremiumCongratulationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HwpPremiumCongratulationsPageRoutingModule {}
