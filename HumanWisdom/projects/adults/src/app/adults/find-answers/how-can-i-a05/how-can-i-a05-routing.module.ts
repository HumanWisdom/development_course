import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA05Page } from './how-can-i-a05.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA05PageRoutingModule {}
