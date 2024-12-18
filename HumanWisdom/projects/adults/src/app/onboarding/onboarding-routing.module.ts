import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { autoLoginGuard } from '../auto-login-guard';
import { AuthGuard } from '../auth.guard';
import { EnableRouteGuard } from '../enable-route.guard';
import { ActiveGuard } from '../active.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../adults/adult-dashboard/adult-dashboard.module').then(m => m.AdultDashboardPageModule),
    canActivate: [AuthGuard]
  },
  /* {
    path: "addcart",
    loadChildren: () => import('./addcart/addcart.module').then(m => m.AddcartPageModule)
  }, */
  {
    path: 'viewcart',
    loadChildren: () => import('../../../../shared/component/viewcart/viewcart.module').then(m => m.ViewcartPageModule)
  },
  {
    path: 'myprogram',
    canActivate:[EnableRouteGuard],
    loadChildren: () => import('../../../../shared/component/subscription-s09-v02/subscription-s09-v02.module').then(m => m.SubscriptionS09V02PageModule)
  },
/*   {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  }, */
  {
    path: 'login',
    canActivate: [autoLoginGuard],
    loadChildren: () => import('./login-signup/login-signup.module').then(m => m.LoginSignupPageModule)
  },
 /*  {
    path: 'activationkey',
    loadChildren: () => import('./activationkey/activationkey.module').then(m => m.ActivationkeyPageModule)
  }, */
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forget-password/forget-password.module').then(m => m.ForgetPasswordPageModule)
  },
  {
    path: 'password-link',
    loadChildren: () => import('./set-password/set-password.module').then(m => m.SetPasswordPageModule)
  },
  /* {
    path: 'assign-key',
    loadChildren: () => import('./assign-key/assign-key.module').then(m => m.AssignKeyPageModule)
  }, */
  {
    path: 'payment',
    canActivate:[EnableRouteGuard],
    loadChildren: () => import('../../../../shared/component/subscription-payment/subscription-payment.module').then(m => m.SubscriptionPaymentPageModule)
  },
/*   {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  }, */
 /*  {
    path: 'testimonials',
    loadChildren: () => import('./testimonials/testimonials.module').then(m => m.TestimonialsPageModule)
  }, */
  {
    path: 'add-to-cart',
    canActivate:[EnableRouteGuard],
    loadChildren: () => import('../../../../shared/component/subscription-s01-v04/subscription-s01-v04.module').then(m => m.SubscriptionS01V04PageModule)
  },
 /*  {
    path: 'raf',
    loadChildren: () => import('./raf/raf.module').then(m => m.RafPageModule)
  }, */
  {
    path: 'user-profile',
    loadChildren: () => import('../../../../shared/component/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate:[EnableRouteGuard]
  },
  {
    path: 'set-password',
    canActivate:[EnableRouteGuard],
    loadChildren: () => import('./set-password/set-password.module').then(m => m.SetPasswordPageModule)
  },
  {
    path: 'profile-edit',
    canActivate:[EnableRouteGuard],
     loadChildren: () => import('../../../../shared/component/profile-edit/profile-edit.module').then(m=>m.ProfileEditPageModule)
  },
  {
    path: 'change-password',
    canActivate:[EnableRouteGuard],
    loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'free-limit',
    loadChildren: () => import('./free-limit/free-limit.module').then(m => m.FreeLimitPageModule)
  },
{
    path: 'payment-details',
    canActivate:[EnableRouteGuard],
    loadChildren: () => import('../../../../shared/component/duplicate-subscription-payment/duplicate-subscription-payment.module').then(m => m.DuplicateSubscriptionPaymentModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
