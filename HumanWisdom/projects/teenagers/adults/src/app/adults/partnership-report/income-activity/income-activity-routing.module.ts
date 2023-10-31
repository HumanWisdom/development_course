import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeActivityPage } from './income-activity.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeActivityPageRoutingModule {}
