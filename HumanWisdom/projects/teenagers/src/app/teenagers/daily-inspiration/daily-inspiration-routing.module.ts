import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyInspiration } from './daily-inspiration.page';

const routes: Routes = [
  {
    path: '',
    component: DailyInspiration
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyPracticePageRoutingModule {}
