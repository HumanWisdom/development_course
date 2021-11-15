import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS07V02Page } from './subscription-s07-v02.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS07V02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS07V02PageRoutingModule {}
