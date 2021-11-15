import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSignupSplashPageRoutingModule } from './login-signup-splash-routing.module';

import { LoginSignupSplashPage } from './login-signup-splash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSignupSplashPageRoutingModule
  ],
  declarations: [LoginSignupSplashPage],
  exports: [
    LoginSignupSplashPage
  ]
})
export class LoginSignupSplashPageModule {}
