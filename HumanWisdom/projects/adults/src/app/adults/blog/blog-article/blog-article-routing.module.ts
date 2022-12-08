import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogArticlePage } from './blog-article.page';

const routes: Routes = [
  {
    path: '',
    component: BlogArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogArticlePageRoutingModule {}
