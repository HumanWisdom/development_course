import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnershipSubscribedPage } from './partnership-subscribed.page';

const routes: Routes = [
  {
    path: '',
    component: PartnershipSubscribedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnershipSubscribedPageRoutingModule {}
