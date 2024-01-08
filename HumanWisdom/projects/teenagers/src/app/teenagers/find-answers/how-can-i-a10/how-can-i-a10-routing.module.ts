import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA10Page } from './how-can-i-a10.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA10PageRoutingModule {}
