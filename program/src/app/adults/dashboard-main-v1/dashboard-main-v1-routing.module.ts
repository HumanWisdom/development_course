import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardMainV1Page } from './dashboard-main-v1.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardMainV1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardMainV1PageRoutingModule {}
