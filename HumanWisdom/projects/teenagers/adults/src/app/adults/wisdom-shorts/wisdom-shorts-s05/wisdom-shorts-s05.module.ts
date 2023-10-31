import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS05PageRoutingModule } from './wisdom-shorts-s05-routing.module';

import { WisdomShortsS05Page } from './wisdom-shorts-s05.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS05PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS05Page]
})
export class WisdomShortsS05PageModule {}
