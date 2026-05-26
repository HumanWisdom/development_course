import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S107015Page } from './s107015.page';

const routes: Routes = [
  {
    path: '',
    component: S107015Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S107015PageRoutingModule {}
