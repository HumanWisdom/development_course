import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157012Page } from './s157012.page';

const routes: Routes = [
  {
    path: '',
    component: S157012Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157012PageRoutingModule {}
