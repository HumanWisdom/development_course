import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeelingUpsetPage } from './feeling-upset.page';

const routes: Routes = [
  {
    path: '',
    component: FeelingUpsetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeelingUpsetPageRoutingModule {}
