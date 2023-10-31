import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreesistersPage } from './treesisters.page';

const routes: Routes = [
  {
    path: '',
    component: TreesistersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreesistersPageRoutingModule {}
