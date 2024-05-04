import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomShortsIndexPage } from './wisdom-shorts-index.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomShortsIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomShortsIndexPageRoutingModule {}
