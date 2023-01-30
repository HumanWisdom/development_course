import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S78002Page } from './s78002.page';

const routes: Routes = [
  {
    path: '',
    component: S78002Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S78002PageRoutingModule {}
