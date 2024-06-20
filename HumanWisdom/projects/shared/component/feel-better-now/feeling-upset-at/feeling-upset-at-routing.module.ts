import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeelingUpsetAtPage } from './feeling-upset-at.page';

const routes: Routes = [
  {
    path: '',
    component: FeelingUpsetAtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeelingUpsetAtPageRoutingModule {}
