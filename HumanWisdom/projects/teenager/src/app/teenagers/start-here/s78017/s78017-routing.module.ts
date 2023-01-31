import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78017Page } from './s78017.page';

const routes: Routes = [
  {
    path: '',
    component: S78017Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78017PageRoutingModule {}
