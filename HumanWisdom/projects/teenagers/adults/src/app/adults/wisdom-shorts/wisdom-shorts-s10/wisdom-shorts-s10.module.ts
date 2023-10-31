import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS10PageRoutingModule } from './wisdom-shorts-s10-routing.module';

import { WisdomShortsS10Page } from './wisdom-shorts-s10.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS10PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS10Page]
})
export class WisdomShortsS10PageModule {}
