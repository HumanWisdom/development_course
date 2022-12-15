import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S75006Page } from './s75006.page';

const routes: Routes = [
  {
    path: '',
    component: S75006Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S75006PageRoutingModule {}
