import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaveCalmMindTranscriptPage } from './have-calm-mind-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: HaveCalmMindTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaveCalmMindTranscriptPageRoutingModule {}
