import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA07Page } from './how-can-i-a07.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA07PageRoutingModule {}
