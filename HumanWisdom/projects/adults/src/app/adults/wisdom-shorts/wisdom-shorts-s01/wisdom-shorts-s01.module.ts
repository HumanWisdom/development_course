import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS01PageRoutingModule } from './wisdom-shorts-s01-routing.module';

import { WisdomShortsS01Page } from './wisdom-shorts-s01.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS01PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS01Page]
})
export class WisdomShortsS01PageModule {}
