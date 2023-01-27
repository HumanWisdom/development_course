import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78003Page } from './s78003.page';

const routes: Routes = [
  {
    path: '',
    component: S78003Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78003PageRoutingModule {}
