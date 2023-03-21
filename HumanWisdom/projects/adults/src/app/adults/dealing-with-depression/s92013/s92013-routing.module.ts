import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92013Page } from './s92013.page';

const routes: Routes = [
  {
    path: '',
    component: S92013Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92013PageRoutingModule {}
