import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS08V02Page } from './subscription-s08-v02.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS08V02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS08V02PageRoutingModule {}
