import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TocHeaderS01Page } from './toc-header-s01.page';

const routes: Routes = [
  {
    path: '',
    component: TocHeaderS01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TocHeaderS01PageRoutingModule {}
