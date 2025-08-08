import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyPracticePage } from './daily-practice.page';
import { RouteHistoryGuard } from '../../guard/router-history-guard';

const routes: Routes = [
  {
    path: '',
    component: DailyPracticePage,
    canActivate: [RouteHistoryGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyPracticePageRoutingModule {}
