import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92008Page } from './s92008.page';

const routes: Routes = [
  {
    path: '',
    component: S92008Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92008PageRoutingModule {}
