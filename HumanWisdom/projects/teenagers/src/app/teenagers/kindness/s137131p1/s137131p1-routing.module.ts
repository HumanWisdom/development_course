import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S137131p1Page } from './s137131p1.page';

const routes: Routes = [
  {
    path: '',
    component: S137131p1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S137131p1PageRoutingModule {}
