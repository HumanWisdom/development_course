import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { autoLoginGuard } from '../onboarding/auto-login-guard';
import {EnableRouteGuard} from '../../../../shared/enable-route.guard'
const routes: Routes = [
  {
    path: 'login',
    canActivate: [autoLoginGuard],
    loadChildren: () => import('./login-signup/login-signup.module').then(m => m.LoginSignupPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('../../../../shared/component/profile-edit/profile-edit.module').then(m=>m.ProfileEditPageModule)
  },
  {
    path: 'myprogram',
    loadChildren: () => import('../../../../shared/component/subscription-s09-v02/subscription-s09-v02.module').then(m => m.SubscriptionS09V02PageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forget-password/forget-password.module').then(m => m.ForgetPasswordPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'set-password',
    loadChildren: () => import('./set-password/set-password.module').then(m => m.SetPasswordPageModule)
  },
  {
    path: 'password-link',
    loadChildren: () => import('./set-password/set-password.module').then(m => m.SetPasswordPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('../../../../shared/component/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate:[EnableRouteGuard]
  },
  {
    path: 'payment',
    loadChildren: () => import('../../../../shared/component/subscription-payment/subscription-payment.module').then(m => m.SubscriptionPaymentPageModule)
  },
  {
    path: 'add-to-cart',
    loadChildren: () => import('../../../../shared/component/subscription-s01-v04/subscription-s01-v04.module').then(m => m.SubscriptionS01V04PageModule)
  },
  {
    path: 'viewcart',
    loadChildren: () => import('../../../../shared/component/viewcart/viewcart.module').then(m => m.ViewcartPageModule)
  },
  {
    path: 'payment-details',
    loadChildren: () => import('../../../../shared/component/duplicate-subscription-payment/duplicate-subscription-payment.module').then(m => m.DuplicateSubscriptionPaymentModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
