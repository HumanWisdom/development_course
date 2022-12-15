import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageYourEmotionsTranscriptPage } from './manage-your-emotions-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: ManageYourEmotionsTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageYourEmotionsTranscriptPageRoutingModule {}
