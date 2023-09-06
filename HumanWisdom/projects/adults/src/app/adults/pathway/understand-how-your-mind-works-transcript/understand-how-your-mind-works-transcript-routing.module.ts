import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderstandHowYourMindWorksTranscriptPage } from './understand-how-your-mind-works-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: UnderstandHowYourMindWorksTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnderstandHowYourMindWorksTranscriptPageRoutingModule {}
