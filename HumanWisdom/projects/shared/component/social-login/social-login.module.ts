import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialLoginPageRoutingModule } from './social-login-routing.module';

import { SocialLoginPage } from './social-login.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SocialLoginPageRoutingModule
  ],
  declarations: [SocialLoginPage]
})
export class SocialLoginPageModule {}
