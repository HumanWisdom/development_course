import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS05V02Page } from './subscription-s05-v02.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS05V02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS05V02PageRoutingModule {}
