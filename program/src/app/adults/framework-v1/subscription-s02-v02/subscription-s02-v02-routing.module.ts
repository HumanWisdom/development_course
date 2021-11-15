import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS02V02Page } from './subscription-s02-v02.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS02V02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS02V02PageRoutingModule {}
