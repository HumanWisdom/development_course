import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S75002Page } from './s75002.page';

const routes: Routes = [
  {
    path: '',
    component: S75002Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S75002PageRoutingModule {}
