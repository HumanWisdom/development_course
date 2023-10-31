import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeUnhelpfulHabitsTranscriptPage } from './change-unhelpful-habits-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeUnhelpfulHabitsTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeUnhelpfulHabitsTranscriptPageRoutingModule {}
