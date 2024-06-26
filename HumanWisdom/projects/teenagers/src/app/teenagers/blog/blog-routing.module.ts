import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveGuard } from 'src/app/active.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../../../../shared/component/blogs/blog-index/blog-index.module').then( m => m.BlogIndexPageModule),
  },
  {
    path: 'blog-index',
    loadChildren: () => import('../../../../../shared/component/blogs/blog-index/blog-index.module').then( m => m.BlogIndexPageModule),
  },
  {
    path: 'blog-article',
    // canActivate:[ActiveGuard],  
    loadChildren: () => import('../../../../../shared/component/blogs/blog-article/blog-article.module').then( m => m.BlogArticlePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
