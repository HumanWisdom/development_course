import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS04Page } from './wisdom-shorts-s04.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS04PageRoutingModule {}
