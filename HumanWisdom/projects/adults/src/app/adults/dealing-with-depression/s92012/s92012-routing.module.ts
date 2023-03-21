import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92012Page } from './s92012.page';

const routes: Routes = [
  {
    path: '',
    component: S92012Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92012PageRoutingModule {}
