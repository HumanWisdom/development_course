import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS06Page } from './wisdom-shorts-s06.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS06PageRoutingModule {}
