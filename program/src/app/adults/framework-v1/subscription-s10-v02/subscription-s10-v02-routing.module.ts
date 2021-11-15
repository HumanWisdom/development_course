import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS10V02Page } from './subscription-s10-v02.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS10V02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS10V02PageRoutingModule {}
