import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA01AtPage } from './how-can-i-a01-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA01AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA01AtPageRoutingModule {}
