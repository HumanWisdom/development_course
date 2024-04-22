import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnableRouteGuard} from '../../../../shared/enable-route.guard'
const routes: Routes = [
  {
    path: 'login',
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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
