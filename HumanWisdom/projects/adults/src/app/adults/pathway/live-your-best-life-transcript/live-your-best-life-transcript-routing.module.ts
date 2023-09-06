import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveYourBestLifeTranscriptPage } from './live-your-best-life-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: LiveYourBestLifeTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveYourBestLifeTranscriptPageRoutingModule {}
