import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvercomeUnhelpfulHabitsTranscriptPage } from './overcome-unhelpful-habits-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: OvercomeUnhelpfulHabitsTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvercomeUnhelpfulHabitsTranscriptPageRoutingModule {}
