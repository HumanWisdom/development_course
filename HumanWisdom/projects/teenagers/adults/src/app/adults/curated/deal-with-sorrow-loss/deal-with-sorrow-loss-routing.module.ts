import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealWithSorrowLossPage } from './deal-with-sorrow-loss.page';

const routes: Routes = [
  {
    path: '',
    component: DealWithSorrowLossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealWithSorrowLossPageRoutingModule {}
