import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HumanwisdomPremiumPage } from './humanwisdom-premium.page';

const routes: Routes = [
  {
    path: '',
    component: HumanwisdomPremiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HumanwisdomPremiumPageRoutingModule {}
