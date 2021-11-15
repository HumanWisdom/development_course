import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NatureOfIS02Page } from './nature-of-i-s02.page';

const routes: Routes = [
  {
    path: '',
    component: NatureOfIS02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NatureOfIS02PageRoutingModule {}
