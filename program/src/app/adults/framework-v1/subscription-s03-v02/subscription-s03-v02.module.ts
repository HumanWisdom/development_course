import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS03V02PageRoutingModule } from './subscription-s03-v02-routing.module';

import { SubscriptionS03V02Page } from './subscription-s03-v02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS03V02PageRoutingModule
  ],
  declarations: [SubscriptionS03V02Page]
})
export class SubscriptionS03V02PageModule {}
