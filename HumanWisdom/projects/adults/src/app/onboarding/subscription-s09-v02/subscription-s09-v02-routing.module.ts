import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS09V02Page } from './subscription-s09-v02.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS09V02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS09V02PageRoutingModule {}
