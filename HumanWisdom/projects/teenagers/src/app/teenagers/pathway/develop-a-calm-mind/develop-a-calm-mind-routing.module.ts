import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevelopACalmMindPage } from './develop-a-calm-mind.page';

const routes: Routes = [
  {
    path: '',
    component: DevelopACalmMindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopACalmMindPageRoutingModule {}
