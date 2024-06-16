import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS01V04Page } from './subscription-s01-v04.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS01V04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS01V04PageRoutingModule {}
