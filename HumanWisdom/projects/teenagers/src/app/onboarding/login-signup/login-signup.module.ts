import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSignupPageRoutingModule } from './login-signup-routing.module';

import { LoginSignupPage } from './login-signup.page';

import { SharedModule } from '../../../../../shared/shared.module';
import {LoginSignupPage as CommonLogin} from '../../../../../shared/component/login-signup/login-signup.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginSignupPageRoutingModule,
    SharedModule,
    CommonLogin
  ],
  declarations: [LoginSignupPage]
})
export class LoginSignupPageModule {}
