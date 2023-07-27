import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA15Page } from './how-can-i-a15.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA15PageRoutingModule {}
