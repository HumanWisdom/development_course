import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA08Page } from './how-can-i-a08.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA08PageRoutingModule {}
