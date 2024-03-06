import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnToQuestionYourselfPage } from './learn-to-question-yourself.page';

const routes: Routes = [
  {
    path: '',
    component: LearnToQuestionYourselfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnToQuestionYourselfPageRoutingModule {}
