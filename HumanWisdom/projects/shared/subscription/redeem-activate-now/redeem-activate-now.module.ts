import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemActivateNowPageRoutingModule } from './redeem-activate-now-routing.module';

import { RedeemActivateNowPage } from './redeem-activate-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemActivateNowPageRoutingModule
  ],
  declarations: [RedeemActivateNowPage]
})
export class RedeemActivateNowPageModule {}
