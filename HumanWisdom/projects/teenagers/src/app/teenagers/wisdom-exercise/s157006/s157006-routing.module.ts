import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157006Page } from './s157006.page';

const routes: Routes = [
  {
    path: '',
    component: S157006Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157006PageRoutingModule {}
