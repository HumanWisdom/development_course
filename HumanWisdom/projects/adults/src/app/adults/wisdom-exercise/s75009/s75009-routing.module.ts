import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S75009Page } from './s75009.page';

const routes: Routes = [
  {
    path: '',
    component: S75009Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S75009PageRoutingModule {}
