import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastTocPage } from './podcast-toc.page';

const routes: Routes = [
  {
    path: '',
    component: PodcastTocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodcastTocPageRoutingModule {}
