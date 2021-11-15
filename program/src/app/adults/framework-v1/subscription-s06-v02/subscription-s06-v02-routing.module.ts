import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS06V02Page } from './subscription-s06-v02.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS06V02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS06V02PageRoutingModule {}
