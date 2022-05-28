import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaveFulfillingRelationshipsTranscriptPage } from './have-fulfilling-relationships-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: HaveFulfillingRelationshipsTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaveFulfillingRelationshipsTranscriptPageRoutingModule {}
