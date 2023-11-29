import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderstandYourselfTranscriptPage } from './understand-yourself-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: UnderstandYourselfTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnderstandYourselfTranscriptPageRoutingModule {}
