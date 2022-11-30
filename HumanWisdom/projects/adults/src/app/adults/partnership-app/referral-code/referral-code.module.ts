import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferralCodePageRoutingModule } from './referral-code-routing.module';

import { ReferralCodePage } from './referral-code.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferralCodePageRoutingModule,
    SharedModule
  ],
  declarations: [ReferralCodePage]
})
export class ReferralCodePageModule {}
