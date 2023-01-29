import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78009Page } from './s78009.page';

const routes: Routes = [
  {
    path: '',
    component: S78009Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78009PageRoutingModule {}
