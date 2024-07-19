import { IntroGuard } from './intro.guard';
import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { authLoginGuard } from './auth-login.guard'

import{BlogIndexPage}  from './../../../shared/component/blogs/blog-index/blog-index.page';
import{BlogArticlePage}  from './../../../shared/component/blogs/blog-article/blog-article.page';

const routes: Routes = [
  {
    path: "adults",
    loadChildren: () => import("./adults/adults.module").then(m => m.AdultsModule)
  },
  // {
  //   path: "course",
  //   pathMatch:"full",
  //   redirectTo:"",
  //   //canActivate:[AuthGuard]
  // },
  // {
  //   path: "course/adults",
  //   redirectTo:"adults",
  //   //canActivate:[AuthGuard]
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules,  scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


