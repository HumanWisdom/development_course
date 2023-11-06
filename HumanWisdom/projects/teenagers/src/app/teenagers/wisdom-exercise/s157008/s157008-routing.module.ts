import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157008Page } from './s157008.page';

const routes: Routes = [
  {
    path: '',
    component: S157008Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157008PageRoutingModule {}
