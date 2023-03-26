import { IntroGuard } from './intro.guard';
import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { authLoginGuard } from './auth-login.guard';
import { BlogIndexPage } from './adults/blog/blog-index/blog-index.page';
import { BlogArticlePage } from './adults/blog/blog-article/blog-article.page';

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
  {
    path: "course/onboarding",
    redirectTo:"onboarding"
  },
  {
    path: "onboarding",
    loadChildren: () => import("./onboarding/onboarding.module").then(m => m.OnboardingModule)    
  },
  {
    path: "course/forum",
    redirectTo:"forum"
  },
  {
    path: "forum",
    loadChildren: () => import("./forum/framework-v1.module").then(m => m.FrameworkV1Module)  
  },
  {
    path: "course/coach",
    redirectTo:"coach"
  },
  {
    path: "coach",
    loadChildren: () => import("./coach/coach.module").then(m => m.CoachModule)  
  },
  {
    path: "course/intro",
    redirectTo:"intro"
  },
  {
    path: "intro",
    canActivate:[IntroGuard],
    loadChildren: () => import("./introductory/introductory.module").then(m => m.IntroductoryModule)  
  },
  {
    path: 'applications',
    loadChildren: () => import('./adults/adverts-hwp-app/adverts-hwp-app.module').then(m => m.AdvertsHwpAppPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./adults/adverts-about/adverts-about.module').then(m => m.AdvertsAboutPageModule)
  },
  {
    path: 'partnership-program',
    loadChildren: () => import('./adults/partnership-webpage/partnership-index/partnership-index.module').then( m => m.PartnershipIndexPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./adults/help-support/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./adults/help-support/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./adults/help-support/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./adults/help-support/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'cookies-policy',
    loadChildren: () => import('./adults/help-support/cookie-policy/cookie-policy.module').then( m => m.CookiePolicyPageModule)
  },
  {
    path: 'give-the-gift-of-wisdom',
    loadChildren: () => import('./adults/give-the-gift-of-wisdom/give-the-gift-of-wisdom.module').then(m => m.GiveTheGiftOfWisdomPageModule)
  },
  {
    path: 'wisdom-for-work',
    loadChildren: () => import('./adults/adverts-work/adverts-work.module').then(m => m.AdvertsWorkPageModule)
  },
  {
    path: 'wisdom-for-students',
    loadChildren: () => import('./adults/adverts-student/adverts-student.module').then(m => m.AdvertsStudentPageModule)
  },
  {
    path: 'log-in',
    canActivate: [authLoginGuard],
    loadChildren: () => import('./onboarding/login-signup/login-signup.module').then(m => m.LoginSignupPageModule)
  },
  {
    path: 'partnership-app',
    canActivate: [AuthGuard],
    loadChildren: () => import('./adults/partnership-app/partnership-app.module').then(m => m.PartnershipAppModule)
  },
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
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy', scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


