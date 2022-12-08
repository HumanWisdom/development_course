import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSignupPage } from './login-signup.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSignupPageRoutingModule {}
