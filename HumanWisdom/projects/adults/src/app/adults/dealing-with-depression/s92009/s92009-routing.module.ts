import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92009Page } from './s92009.page';

const routes: Routes = [
  {
    path: '',
    component: S92009Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92009PageRoutingModule {}
