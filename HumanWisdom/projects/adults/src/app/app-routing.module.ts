import { IntroGuard } from './intro.guard';
import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { authLoginGuard } from './auth-login.guard'

import{BlogIndexPage}  from './../../../shared/component/blogs/blog-index/blog-index.page';
import{BlogArticlePage}  from './../../../shared/component/blogs/blog-article/blog-article.page';

const routes: Routes = [
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'course',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then( m => m.CoursePageModule)
  },*/
  {
    path: "",
  // redirectTo: "/adults/adult-dashboard",
    // redirectTo: "/onboarding/login",
   // redirectTo: "/adults/adult-dashboard",
   //redirectTo: "/adults/adverts-hwp",
   loadChildren:() => import("./adults/adverts-hwp/adverts-hwp.module").then(m => m.AdvertsHwpPageModule)
    // redirectTo: "/",
   // pathMatch: "full"
  },
  {
    path: "adults",
    loadChildren: () => import("./adults/adults.module").then(m => m.AdultsModule)
    //canActivate:[AuthGuard]
  },
  {
    path: "course",
    pathMatch:"full",
    redirectTo:"",
    //canActivate:[AuthGuard]
  },
  {
    path: "course/adults",
    redirectTo:"adults",
    //canActivate:[AuthGuard]
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules,  scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


