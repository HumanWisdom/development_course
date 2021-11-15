import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastStartPage } from './podcast-start.page';

const routes: Routes = [
  {
    path: '',
    component: PodcastStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodcastStartPageRoutingModule {}
