import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnxietyPage } from './anxiety.page';

const routes: Routes = [
  {
    path: '',
    component: AnxietyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnxietyPageRoutingModule {}
