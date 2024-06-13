import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS09V02Page } from './subscription-s09-v02.page';
import { ManageSubscriptionPage } from './manage-subscription/manage-subscription.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS09V02Page
  },
  {
    path: "manage-subscription",
    loadChildren: () => import('./manage-subscription/manage-subscription.module').then(m => m.ManageSubscriptionPageModule)
  },
  {
    path: "cancel-subscription",
    loadChildren: () => import('./cancel-subscription-reason/cancel-subscription-reason.module').then(m => m.CancelSubscriptionReasonPageModule)
  },
  {
    path: "cancelled",
    loadChildren: () => import('./cancelled/cancelled.module').then(m => m.CancelledPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS09V02PageRoutingModule {}
