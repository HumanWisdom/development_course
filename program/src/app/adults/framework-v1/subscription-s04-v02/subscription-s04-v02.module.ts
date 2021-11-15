import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS04V02PageRoutingModule } from './subscription-s04-v02-routing.module';

import { SubscriptionS04V02Page } from './subscription-s04-v02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS04V02PageRoutingModule
  ],
  declarations: [SubscriptionS04V02Page]
})
export class SubscriptionS04V02PageModule {}
