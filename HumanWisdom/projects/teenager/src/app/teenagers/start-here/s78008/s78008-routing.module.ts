import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78008Page } from './s78008.page';

const routes: Routes = [
  {
    path: '',
    component: S78008Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78008PageRoutingModule {}
