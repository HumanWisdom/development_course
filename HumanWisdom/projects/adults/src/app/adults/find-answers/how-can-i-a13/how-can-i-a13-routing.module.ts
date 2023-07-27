import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA13Page } from './how-can-i-a13.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA13PageRoutingModule {}
