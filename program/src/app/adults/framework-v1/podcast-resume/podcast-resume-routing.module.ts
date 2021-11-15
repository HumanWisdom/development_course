import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodcastResumePage } from './podcast-resume.page';

const routes: Routes = [
  {
    path: '',
    component: PodcastResumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodcastResumePageRoutingModule {}
