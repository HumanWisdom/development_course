import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S119001Page } from './s119001.page';

const routes: Routes = [
  {
    path: '',
    component: S119001Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S119001PageRoutingModule {}
