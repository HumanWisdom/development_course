import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NatureOfIS01Page } from './nature-of-i-s01.page';

const routes: Routes = [
  {
    path: '',
    component: NatureOfIS01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NatureOfIS01PageRoutingModule {}
