import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscribedUnsubscribedPageRoutingModule } from './subscribed-unsubscribed-routing.module';

import { SubscribedUnsubscribedPage } from './subscribed-unsubscribed.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscribedUnsubscribedPageRoutingModule,
    SharedModule
  ],
  declarations: [SubscribedUnsubscribedPage]
})
export class SubscribedUnsubscribedPageModule {}
