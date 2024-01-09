import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA17Page } from './how-can-i-a17.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA17PageRoutingModule {}
