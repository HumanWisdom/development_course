import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevelopACalmMindTranscriptPage } from './develop-a-calm-mind-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: DevelopACalmMindTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopACalmMindTranscriptPageRoutingModule {}
