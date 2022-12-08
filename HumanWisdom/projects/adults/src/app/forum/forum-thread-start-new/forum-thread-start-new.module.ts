import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumThreadStartNewPageRoutingModule } from './forum-thread-start-new-routing.module';

import { ForumThreadStartNewPage } from './forum-thread-start-new.page';
// import {SharedModule} from '../../shared/shared.module'
import {SharedModule} from '../../../../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumThreadStartNewPageRoutingModule,
    SharedModule
  ],
  declarations: [ForumThreadStartNewPage]
})
export class ForumThreadStartNewPageModule {}
