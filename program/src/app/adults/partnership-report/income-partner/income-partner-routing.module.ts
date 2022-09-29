import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomePartnerPage } from './income-partner.page';

const routes: Routes = [
  {
    path: '',
    component: IncomePartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomePartnerPageRoutingModule {}
