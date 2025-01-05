import { IntroGuard } from './intro.guard';
import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { authLoginGuard } from './auth-login.guard'

import{BlogIndexPage}  from './../../../shared/component/blogs/blog-index/blog-index.page';
import{BlogArticlePage}  from './../../../shared/component/blogs/blog-article/blog-article.page';
import { NewsletterComponent } from '../../../shared/component/newsletter/newsletter.component';

const routes: Routes = [
  // {
  //   path: "",
  //  loadChildren:() => import("./adults/adverts-hwp/adverts-hwp.module").then(m => m.AdvertsHwpPageModule)
  // },
  {
    path: "adults",
    loadChildren: () => import("./adults/adults.module").then(m => m.AdultsModule)
  },
  {
    path: "course",
    pathMatch:"full",
    redirectTo:"adults",
  },
  {
    path: "course/adults",
    redirectTo:"adults",
  },
  {
    path: 'newsletter-signup',
    component: NewsletterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules,  scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


