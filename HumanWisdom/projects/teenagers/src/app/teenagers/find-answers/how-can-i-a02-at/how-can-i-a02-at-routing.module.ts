import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA02AtPage } from './how-can-i-a02-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA02AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA02AtPageRoutingModule {}
