import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA11AtPage } from './how-can-i-a11-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA11AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA11AtPageRoutingModule {}
