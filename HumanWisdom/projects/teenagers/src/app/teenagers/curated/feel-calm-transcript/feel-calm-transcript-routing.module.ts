import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeelCalmTranscriptPage } from './feel-calm-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: FeelCalmTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeelCalmTranscriptPageRoutingModule {}
