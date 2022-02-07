import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS09Page } from './wisdom-shorts-s09.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS09Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS09PageRoutingModule {}
