import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';
import { AdultsAudioMeditationComponent } from '../../../../../shared/component/adults-audio-meditation/adults-audio-meditation.component';

import { S51000Page } from './s51000/s51000.page';

const routes: Routes = [
  {
    path: '',
    component: S51000Page,
  },
  {
    path: 's51000',
    canActivate: [ActiveGuard],
    component: S51000Page,
  },
  {
    path: 'audiopage/:audiolink/:title/:RowId',
    component: AdultsAudioMeditationComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioMeditationRoutingModule { }
