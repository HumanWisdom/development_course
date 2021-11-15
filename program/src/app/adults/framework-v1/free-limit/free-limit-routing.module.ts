import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeLimitPage } from './free-limit.page';

const routes: Routes = [
  {
    path: '',
    component: FreeLimitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeLimitPageRoutingModule {}
