import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowCanIA19AtPage } from './how-can-i-a19-at.page';

const routes: Routes = [
  {
    path: '',
    component: HowCanIA19AtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowCanIA19AtPageRoutingModule {}
