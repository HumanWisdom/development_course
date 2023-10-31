import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS01Page } from './wisdom-shorts-s01.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS01PageRoutingModule {}
