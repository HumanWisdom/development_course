import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LonelinessPage } from './loneliness.page';
import { SingleAudioContentComponent } from '../../single-audio-content/single-audio-content.component';
import { YoutubeContentComponent } from '../../youtube-content/youtube-content.component';

const routes: Routes = [
  {
    path: '',
    component: LonelinessPage
  },
  {
    path: 'audiopage/:audiolink/:title/:RowId',
    component: SingleAudioContentComponent
  },
  {
    path: 'youtubelink/:videolink',
    component: YoutubeContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LonelinessPageRoutingModule {}
