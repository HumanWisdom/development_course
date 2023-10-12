import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S137093p1Page } from './s137093p1.page';

const routes: Routes = [
  {
    path: '',
    component: S137093p1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S137093p1PageRoutingModule {}
