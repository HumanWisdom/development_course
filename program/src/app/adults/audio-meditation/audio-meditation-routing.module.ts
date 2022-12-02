import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

import { S51000Page } from './s51000/s51000.page';
import { S51002Page } from './s51002/s51002.page';

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
    path: 'audio',
    canActivate: [ActiveGuard],
    component: S51002Page,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioMeditationRoutingModule { }
