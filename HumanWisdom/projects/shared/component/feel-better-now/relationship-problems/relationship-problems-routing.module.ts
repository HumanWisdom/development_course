import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelationshipProblemsPage } from './relationship-problems.page';
import { SingleAudioContentComponent } from '../../single-audio-content/single-audio-content.component';

const routes: Routes = [
  {
    path: '',
    component: RelationshipProblemsPage
  },
  {
    path: 'audiopage/:audiolink/:title/:RowId',
    component: SingleAudioContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelationshipProblemsPageRoutingModule {}
