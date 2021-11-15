import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS01V03Page } from './subscription-s01-v03.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS01V03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS01V03PageRoutingModule {}
