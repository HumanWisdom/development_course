import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnershipTreesistersPage } from './partnership-treesisters.page';

const routes: Routes = [
  {
    path: '',
    component: PartnershipTreesistersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnershipTreesistersPageRoutingModule {}
