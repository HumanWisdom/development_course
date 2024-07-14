import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA03AtPage } from './how-can-i-a03-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA03AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA03AtPageRoutingModule {}
