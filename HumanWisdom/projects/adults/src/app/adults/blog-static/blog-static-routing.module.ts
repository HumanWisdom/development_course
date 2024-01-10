import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogStaticPage } from './blog-static.page';

const routes: Routes = [
  {
    path: '',
    component: BlogStaticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogStaticPageRoutingModule {}
