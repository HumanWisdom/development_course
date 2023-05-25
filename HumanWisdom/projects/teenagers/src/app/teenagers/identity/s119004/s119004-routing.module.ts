import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S119004Page } from './s119004.page';

const routes: Routes = [
  {
    path: '',
    component: S119004Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S119004PageRoutingModule {}
