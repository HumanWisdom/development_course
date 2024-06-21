import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorrowAndLossAtPage } from './sorrow-and-loss-at.page';

const routes: Routes = [
  {
    path: '',
    component: SorrowAndLossAtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorrowAndLossAtPageRoutingModule {}
