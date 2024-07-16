import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA04AtPage } from './how-can-i-a04-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA04AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA04AtPageRoutingModule {}
