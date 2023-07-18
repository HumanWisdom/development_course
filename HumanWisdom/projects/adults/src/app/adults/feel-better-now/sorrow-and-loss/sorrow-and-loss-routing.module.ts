import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorrowAndLossPage } from './sorrow-and-loss.page';

const routes: Routes = [
  {
    path: '',
    component: SorrowAndLossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorrowAndLossPageRoutingModule {}
