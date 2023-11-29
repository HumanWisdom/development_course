import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157002Page } from './s157002.page';

const routes: Routes = [
  {
    path: '',
    component: S157002Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157002PageRoutingModule {}
