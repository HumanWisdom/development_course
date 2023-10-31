import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS14Page } from './wisdom-shorts-s14.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS14PageRoutingModule {}
