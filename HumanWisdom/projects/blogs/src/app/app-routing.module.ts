import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogIndexPage } from './blog/blog-index/blog-index.page';
import { BlogArticlePage } from './blog/blog-article/blog-article.page';

const routes: Routes = [ 
  {
    path:'blogs',
    component:BlogIndexPage
  },
  {
    path: 'blog-article',
    // canActivate:[ActiveGuard],  
    component:BlogArticlePage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
