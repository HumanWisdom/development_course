import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78022Page } from './s78022.page';

const routes: Routes = [
  {
    path: '',
    component: S78022Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78022PageRoutingModule {}
