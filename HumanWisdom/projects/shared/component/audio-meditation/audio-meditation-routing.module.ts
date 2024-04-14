import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdultsAudioMeditationComponent } from '../adults-audio-meditation/adults-audio-meditation.component';
import { S51000Page } from './s51000/s51000.page';

const routes: Routes = [
  {
    path: '',
    component: S51000Page,
  },
  {
    path: 's51000',
    canActivate: [], // Active Guard active-guard
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
