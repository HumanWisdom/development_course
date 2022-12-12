import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvercomeStressAnxietyTranscriptPage } from './overcome-stress-anxiety-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: OvercomeStressAnxietyTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvercomeStressAnxietyTranscriptPageRoutingModule {}
