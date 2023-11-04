import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S157001Page } from './s157001.page';

const routes: Routes = [
  {
    path: '',
    component: S157001Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S157001PageRoutingModule {}
