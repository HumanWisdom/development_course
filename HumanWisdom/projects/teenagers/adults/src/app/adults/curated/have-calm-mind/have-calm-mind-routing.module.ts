import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaveCalmMindPage } from './have-calm-mind.page';

const routes: Routes = [
  {
    path: '',
    component: HaveCalmMindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaveCalmMindPageRoutingModule {}
