import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachCongratulationsPage } from './coach-congratulations.page';

const routes: Routes = [
  {
    path: '',
    component: CoachCongratulationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachCongratulationsPageRoutingModule {}
