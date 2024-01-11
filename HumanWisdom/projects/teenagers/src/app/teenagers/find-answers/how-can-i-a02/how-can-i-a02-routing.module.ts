import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA02Page } from './how-can-i-a02.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA02PageRoutingModule {}
