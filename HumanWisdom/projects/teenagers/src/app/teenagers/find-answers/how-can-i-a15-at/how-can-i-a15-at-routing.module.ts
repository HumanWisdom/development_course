import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA15AtPage } from './how-can-i-a15-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA15AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA15AtPageRoutingModule {}
