import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferFriendPageRoutingModule } from './refer-friend-routing.module';

import { ReferFriendPage } from './refer-friend.page';

import { SharedModule } from '../../../../../shared/shared.module';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferFriendPageRoutingModule,
    SharedModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
  ],
  declarations: [ReferFriendPage]
})
export class ReferFriendPageModule {}
