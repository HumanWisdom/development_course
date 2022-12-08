import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS08PageRoutingModule } from './wisdom-shorts-s08-routing.module';

import { WisdomShortsS08Page } from './wisdom-shorts-s08.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS08PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS08Page]
})
export class WisdomShortsS08PageModule {}
