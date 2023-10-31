import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S75003Page } from './s75003.page';

const routes: Routes = [
  {
    path: '',
    component: S75003Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S75003PageRoutingModule {}
