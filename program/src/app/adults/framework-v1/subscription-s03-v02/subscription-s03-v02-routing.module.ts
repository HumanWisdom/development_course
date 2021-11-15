import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS03V02Page } from './subscription-s03-v02.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS03V02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS03V02PageRoutingModule {}
