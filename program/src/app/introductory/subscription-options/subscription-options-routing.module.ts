import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionOptionsPage } from './subscription-options.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionOptionsPageRoutingModule {}
