import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyPracticePage } from './daily-practice.page';

const routes: Routes = [
  {
    path: '',
    component: DailyPracticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyPracticePageRoutingModule {}
