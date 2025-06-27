import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentHubPage } from './parent-hub.page';

const routes: Routes = [
  {
    path: '',
    component: ParentHubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentHubPageRoutingModule {}
