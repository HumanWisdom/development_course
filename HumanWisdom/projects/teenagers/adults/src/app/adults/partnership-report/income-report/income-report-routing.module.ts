import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeReportPage } from './income-report.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeReportPageRoutingModule {}
