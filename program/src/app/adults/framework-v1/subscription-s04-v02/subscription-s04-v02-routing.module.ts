import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS04V02Page } from './subscription-s04-v02.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS04V02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS04V02PageRoutingModule {}
