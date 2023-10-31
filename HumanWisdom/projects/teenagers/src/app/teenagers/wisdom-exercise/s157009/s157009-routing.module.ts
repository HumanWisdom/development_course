import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157009Page } from './s157009.page';

const routes: Routes = [
  {
    path: '',
    component: S157009Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157009PageRoutingModule {}
