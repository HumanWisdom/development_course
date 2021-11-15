import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenProgressBarPage } from './screen-progress-bar.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenProgressBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenProgressBarPageRoutingModule {}
