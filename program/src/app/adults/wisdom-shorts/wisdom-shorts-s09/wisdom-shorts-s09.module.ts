import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS09PageRoutingModule } from './wisdom-shorts-s09-routing.module';

import { WisdomShortsS09Page } from './wisdom-shorts-s09.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS09PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS09Page]
})
export class WisdomShortsS09PageModule {}
