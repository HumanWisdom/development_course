import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachIntroductionPage } from './coach-introduction.page';

const routes: Routes = [
  {
    path: '',
    component: CoachIntroductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachIntroductionPageRoutingModule {}
