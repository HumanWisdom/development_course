import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78004Page } from './s78004.page';

const routes: Routes = [
  {
    path: '',
    component: S78004Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78004PageRoutingModule {}
