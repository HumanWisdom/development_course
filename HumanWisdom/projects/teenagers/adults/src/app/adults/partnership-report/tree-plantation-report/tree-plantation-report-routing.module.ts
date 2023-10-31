import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreePlantationReportPage } from './tree-plantation-report.page';

const routes: Routes = [
  {
    path: '',
    component: TreePlantationReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreePlantationReportPageRoutingModule {}
