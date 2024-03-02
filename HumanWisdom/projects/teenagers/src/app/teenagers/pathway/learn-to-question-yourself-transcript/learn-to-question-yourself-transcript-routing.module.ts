import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnToQuestionYourselfTranscriptPage } from './learn-to-question-yourself-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: LearnToQuestionYourselfTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnToQuestionYourselfTranscriptPageRoutingModule {}
