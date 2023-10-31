import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../../shared/shared.module';
import { RedeemCongratulationPage } from './redeem-congratulation.page';
import { RedeemCongratulationPageRoutingModule } from './redeem-congratulation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemCongratulationPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [RedeemCongratulationPage]
})
export class RedeemCongratulationPageModule {}
