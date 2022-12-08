import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignKeyPage } from './assign-key.page';

const routes: Routes = [
  {
    path: '',
    component: AssignKeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignKeyPageRoutingModule {}
