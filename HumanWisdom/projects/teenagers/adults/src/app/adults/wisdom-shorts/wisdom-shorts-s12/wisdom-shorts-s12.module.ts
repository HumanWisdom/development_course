import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS12PageRoutingModule } from './wisdom-shorts-s12-routing.module';

import { WisdomShortsS12Page } from './wisdom-shorts-s12.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS12PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS12Page]
})
export class WisdomShortsS12PageModule {}
