import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78013Page } from './s78013.page';

const routes: Routes = [
  {
    path: '',
    component: S78013Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78013PageRoutingModule {}
