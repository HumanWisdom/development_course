import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S75012Page } from './s75012.page';

const routes: Routes = [
  {
    path: '',
    component: S75012Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S75012PageRoutingModule {}
