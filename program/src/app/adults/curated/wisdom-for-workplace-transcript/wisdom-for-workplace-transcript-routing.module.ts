import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomForWorkplaceTranscriptPage } from './wisdom-for-workplace-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomForWorkplaceTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomForWorkplaceTranscriptPageRoutingModule {}
