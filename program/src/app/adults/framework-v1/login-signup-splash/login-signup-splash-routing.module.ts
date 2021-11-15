import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSignupSplashPage } from './login-signup-splash.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSignupSplashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSignupSplashPageRoutingModule {}
