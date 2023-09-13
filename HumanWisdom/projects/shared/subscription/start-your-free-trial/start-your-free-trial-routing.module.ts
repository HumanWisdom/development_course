import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartYourFreeTrialPage } from './start-your-free-trial.page';

const routes: Routes = [
  {
    path: '',
    component: StartYourFreeTrialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartYourFreeTrialPageRoutingModule {}
