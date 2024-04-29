import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS02Page } from './wisdom-shorts-s02.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS02PageRoutingModule {}
