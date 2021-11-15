import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumThreadPageRoutingModule } from './forum-thread-routing.module';

import { ForumThreadPage } from './forum-thread.page';

import {SharedModule} from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumThreadPageRoutingModule,
    SharedModule
  ],
  declarations: [ForumThreadPage]
})
export class ForumThreadPageModule {}
