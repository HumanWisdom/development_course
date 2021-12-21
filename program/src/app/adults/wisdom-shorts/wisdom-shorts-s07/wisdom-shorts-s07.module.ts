import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS07PageRoutingModule } from './wisdom-shorts-s07-routing.module';

import { WisdomShortsS07Page } from './wisdom-shorts-s07.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS07PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS07Page]
})
export class WisdomShortsS07PageModule {}
