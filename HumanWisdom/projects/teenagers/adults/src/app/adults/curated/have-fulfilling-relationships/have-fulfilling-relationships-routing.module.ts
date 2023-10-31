import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaveFulfillingRelationshipsPage } from './have-fulfilling-relationships.page';

const routes: Routes = [
  {
    path: '',
    component: HaveFulfillingRelationshipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaveFulfillingRelationshipsPageRoutingModule {}
