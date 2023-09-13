import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftAFriendPageRoutingModule } from './gift-a-friend-routing.module';

import { GiftAFriendPage } from './gift-a-friend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftAFriendPageRoutingModule
  ],
  declarations: [GiftAFriendPage]
})
export class GiftAFriendPageModule {}
