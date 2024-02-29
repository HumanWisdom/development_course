import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeenTalkPageRoutingModule } from './teen-talk-routing.module';

import { TeenTalkPage } from './teen-talk.page';

import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TeenTalkPageRoutingModule
  ],
  declarations: [TeenTalkPage]
})
export class TeenTalkPageModule {}
