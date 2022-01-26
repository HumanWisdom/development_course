import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachDirectoryFilterPage } from './coach-directory-filter.page';

const routes: Routes = [
  {
    path: '',
    component: CoachDirectoryFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachDirectoryFilterPageRoutingModule {}
