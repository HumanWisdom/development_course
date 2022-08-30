import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferralCodePageRoutingModule } from './referral-code-routing.module';

import { ReferralCodePage } from './referral-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferralCodePageRoutingModule
  ],
  declarations: [ReferralCodePage]
})
export class ReferralCodePageModule {}
