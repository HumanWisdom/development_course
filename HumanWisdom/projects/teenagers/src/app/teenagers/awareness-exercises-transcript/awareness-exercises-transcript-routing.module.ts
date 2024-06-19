import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwarenessExercisesTranscriptPage } from './awareness-exercises-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: AwarenessExercisesTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwarenessExercisesTranscriptPageRoutingModule {}
