import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS07Page } from './wisdom-shorts-s07.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS07PageRoutingModule {}
