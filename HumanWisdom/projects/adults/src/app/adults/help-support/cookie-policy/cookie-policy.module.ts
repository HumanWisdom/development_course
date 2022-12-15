import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookiePolicyPageRoutingModule } from './cookie-policy-routing.module';

import { CookiePolicyPage } from './cookie-policy.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookiePolicyPageRoutingModule,
    SharedModule
  ],
  declarations: [CookiePolicyPage]
})
export class CookiePolicyPageModule {}
