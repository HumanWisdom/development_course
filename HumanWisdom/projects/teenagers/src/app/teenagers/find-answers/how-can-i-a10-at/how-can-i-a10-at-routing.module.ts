import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA10AtPage } from './how-can-i-a10-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA10AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA10AtPageRoutingModule {}
