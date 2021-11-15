import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS02V03Page } from './subscription-s02-v03.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS02V03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS02V03PageRoutingModule {}
