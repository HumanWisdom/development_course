import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsletterSubscribePageRoutingModule } from './newsletter-subscribe-routing.module';

import { NewsletterSubscribePage } from './newsletter-subscribe.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsletterSubscribePageRoutingModule,
    SharedModule
  ],
  declarations: [NewsletterSubscribePage]
})
export class NewsletterSubscribePageModule {}
