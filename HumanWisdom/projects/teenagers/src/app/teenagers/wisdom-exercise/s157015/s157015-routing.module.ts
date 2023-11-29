import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157015Page } from './s157015.page';

const routes: Routes = [
  {
    path: '',
    component: S157015Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157015PageRoutingModule {}
