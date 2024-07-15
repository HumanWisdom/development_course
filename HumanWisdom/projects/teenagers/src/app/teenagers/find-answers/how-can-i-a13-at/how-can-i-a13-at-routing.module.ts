import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA13AtPage } from './how-can-i-a13-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA13AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA13AtPageRoutingModule {}
