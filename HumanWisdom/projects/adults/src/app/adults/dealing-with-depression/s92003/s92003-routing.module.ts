import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92003Page } from './s92003.page';

const routes: Routes = [
  {
    path: '',
    component: S92003Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92003PageRoutingModule {}
