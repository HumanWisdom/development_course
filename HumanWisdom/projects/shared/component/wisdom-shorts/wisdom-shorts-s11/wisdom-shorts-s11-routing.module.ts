import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsS11Page } from './wisdom-shorts-s11.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsS11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsS11PageRoutingModule {}
