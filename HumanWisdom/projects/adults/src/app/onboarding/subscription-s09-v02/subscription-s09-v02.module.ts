import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS09V02PageRoutingModule } from './subscription-s09-v02-routing.module';

import { SubscriptionS09V02Page } from './subscription-s09-v02.page';

import {SharedModule} from '../../adults/shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS09V02PageRoutingModule,
    SharedModule
  ],
  declarations: [SubscriptionS09V02Page]
})
export class SubscriptionS09V02PageModule {}
