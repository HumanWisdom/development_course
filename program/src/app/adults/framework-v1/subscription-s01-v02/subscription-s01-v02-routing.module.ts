import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS01V02Page } from './subscription-s01-v02.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS01V02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS01V02PageRoutingModule {}
