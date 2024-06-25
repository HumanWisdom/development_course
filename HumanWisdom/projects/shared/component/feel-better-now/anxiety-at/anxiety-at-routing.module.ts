import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnxietyAtPage } from './anxiety-at.page';

const routes: Routes = [
  {
    path: '',
    component: AnxietyAtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnxietyAtPageRoutingModule {}
