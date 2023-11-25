import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S158116p1Page } from './s158116p1.page';

const routes: Routes = [
  {
    path: '',
    component: S158116p1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S158116p1PageRoutingModule {}
