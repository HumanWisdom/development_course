import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA01Page } from './how-can-i-a01.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA01PageRoutingModule {}
