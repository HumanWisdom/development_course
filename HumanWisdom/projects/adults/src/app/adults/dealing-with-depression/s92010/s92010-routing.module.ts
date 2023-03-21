import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S92010Page } from './s92010.page';

const routes: Routes = [
  {
    path: '',
    component: S92010Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S92010PageRoutingModule {}
