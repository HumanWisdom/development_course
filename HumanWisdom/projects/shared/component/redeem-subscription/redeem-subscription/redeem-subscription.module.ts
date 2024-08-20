import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../shared/shared.module';
import { RedeemSubscriptionPageRoutingModule } from './redeem-subscription-routing.module';
import { RedeemSubscriptionPage } from './redeem-subscription.page';
import { LoginRegisterModalComponent } from '../../login-register-modal/login-register-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemSubscriptionPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    LoginRegisterModalComponent
  ],
  declarations: [RedeemSubscriptionPage]
})
export class RedeemSubscriptionPageModule {}
