import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S119003Page } from './s119003.page';

const routes: Routes = [
  {
    path: '',
    component: S119003Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S119003PageRoutingModule {}
