import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA06Page } from './how-can-i-a06.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA06PageRoutingModule {}
