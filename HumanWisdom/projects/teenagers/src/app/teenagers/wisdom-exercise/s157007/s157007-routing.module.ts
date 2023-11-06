import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157007Page } from './s157007.page';

const routes: Routes = [
  {
    path: '',
    component: S157007Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157007PageRoutingModule {}
