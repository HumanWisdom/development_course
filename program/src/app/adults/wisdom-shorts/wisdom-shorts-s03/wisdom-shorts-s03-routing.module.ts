import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS03Page } from './wisdom-shorts-s03.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS03PageRoutingModule {}
