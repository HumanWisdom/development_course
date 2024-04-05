import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeHappierTranscriptPage } from './be-happier-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: BeHappierTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeHappierTranscriptPageRoutingModule {}
