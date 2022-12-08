import { IntroGuard } from './intro.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

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
   redirectTo: "/adults/adverts-hwp",
    // redirectTo: "/",
    pathMatch: "full"
  },
  {
    path: "adults",
    loadChildren: () => import("./adults/adults.module").then(m => m.AdultsModule)
    //canActivate:[AuthGuard]
  },
  {
    path: "onboarding",
    loadChildren: () => import("./onboarding/onboarding.module").then(m => m.OnboardingModule)    
  },
  {
    path: "forum",
    loadChildren: () => import("./forum/framework-v1.module").then(m => m.FrameworkV1Module)  
  },
  {
    path: "coach",
    loadChildren: () => import("./coach/coach.module").then(m => m.CoachModule)  
  },
  {
    path: "intro",
    canActivate:[IntroGuard],
    loadChildren: () => import("./introductory/introductory.module").then(m => m.IntroductoryModule)  
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy', scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


