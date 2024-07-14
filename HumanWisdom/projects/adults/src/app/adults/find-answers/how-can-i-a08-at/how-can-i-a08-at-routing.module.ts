import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA08AtPage } from './how-can-i-a08-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA08AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA08AtPageRoutingModule {}
