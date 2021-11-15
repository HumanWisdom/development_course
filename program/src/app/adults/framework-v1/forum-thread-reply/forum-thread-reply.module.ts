import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumThreadReplyPageRoutingModule } from './forum-thread-reply-routing.module';

import { ForumThreadReplyPage } from './forum-thread-reply.page';

import {SharedModule} from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumThreadReplyPageRoutingModule,
    SharedModule
  ],
  declarations: [ForumThreadReplyPage]
})
export class ForumThreadReplyPageModule {}
