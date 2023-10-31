import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS13Page } from './wisdom-shorts-s13.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS13PageRoutingModule {}
