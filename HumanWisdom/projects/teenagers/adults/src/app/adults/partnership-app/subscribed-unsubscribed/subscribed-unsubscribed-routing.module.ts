import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscribedUnsubscribedPage } from './subscribed-unsubscribed.page';

const routes: Routes = [
  {
    path: '',
    component: SubscribedUnsubscribedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscribedUnsubscribedPageRoutingModule {}
