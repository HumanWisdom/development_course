import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS10Page } from './wisdom-shorts-s10.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS10PageRoutingModule {}
