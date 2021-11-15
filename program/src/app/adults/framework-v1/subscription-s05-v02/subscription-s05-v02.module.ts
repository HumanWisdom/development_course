import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS05V02PageRoutingModule } from './subscription-s05-v02-routing.module';

import { SubscriptionS05V02Page } from './subscription-s05-v02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS05V02PageRoutingModule
  ],
  declarations: [SubscriptionS05V02Page]
})
export class SubscriptionS05V02PageModule {}
