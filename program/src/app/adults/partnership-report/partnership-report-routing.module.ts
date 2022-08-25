import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./income-report/income-report.module').then( m => m.IncomeReportPageModule)
  },
  {
    path: 'income-report',
    loadChildren: () => import('./income-report/income-report.module').then( m => m.IncomeReportPageModule)
  },
  {
    path: 'income-activity',
    loadChildren: () => import('./income-activity/income-activity.module').then( m => m.IncomeActivityPageModule)
  },
  {
    path: 'tree-plantation-report',
    loadChildren: () => import('./tree-plantation-report/tree-plantation-report.module').then( m => m.TreePlantationReportPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnershipReportRoutingModule { }
