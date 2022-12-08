import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S75013Page } from './s75013.page';

const routes: Routes = [
  {
    path: '',
    component: S75013Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S75013PageRoutingModule {}
