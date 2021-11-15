import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferFriendPageRoutingModule } from './refer-friend-routing.module';

import { ReferFriendPage } from './refer-friend.page';

import {SharedModule} from '../../shared/shared.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferFriendPageRoutingModule,
    SharedModule
  ],
  declarations: [ReferFriendPage]
})
export class ReferFriendPageModule {}
