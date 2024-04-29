import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS08Page } from './wisdom-shorts-s08.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS08PageRoutingModule {}
