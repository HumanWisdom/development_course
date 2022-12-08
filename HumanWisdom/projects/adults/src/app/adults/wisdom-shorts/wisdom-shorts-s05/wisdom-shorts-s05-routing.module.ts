import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS05Page } from './wisdom-shorts-s05.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS05PageRoutingModule {}
