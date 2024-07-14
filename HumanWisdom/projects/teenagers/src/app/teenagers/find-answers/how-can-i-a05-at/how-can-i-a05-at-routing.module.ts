import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA05AtPage } from './how-can-i-a05-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA05AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA05AtPageRoutingModule {}
