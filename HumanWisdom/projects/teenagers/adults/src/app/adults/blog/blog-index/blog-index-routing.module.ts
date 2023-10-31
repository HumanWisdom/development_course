import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogIndexPage } from './blog-index.page';

const routes: Routes = [
  {
    path: '',
    component: BlogIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogIndexPageRoutingModule {}
