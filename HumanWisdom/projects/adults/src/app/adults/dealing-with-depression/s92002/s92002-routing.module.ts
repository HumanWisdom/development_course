import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92002Page } from './s92002.page';

const routes: Routes = [
  {
    path: '',
    component: S92002Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92002PageRoutingModule {}
