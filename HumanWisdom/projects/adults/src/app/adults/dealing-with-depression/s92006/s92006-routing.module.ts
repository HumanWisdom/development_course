import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92006Page } from './s92006.page';

const routes: Routes = [
  {
    path: '',
    component: S92006Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92006PageRoutingModule {}
