import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS12Page } from './wisdom-shorts-s12.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS12PageRoutingModule {}
