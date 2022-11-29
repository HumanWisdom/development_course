import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';

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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioMeditationRoutingModule { }
