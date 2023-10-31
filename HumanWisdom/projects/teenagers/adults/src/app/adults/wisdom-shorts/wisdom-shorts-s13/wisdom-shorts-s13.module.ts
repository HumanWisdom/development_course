import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS13PageRoutingModule } from './wisdom-shorts-s13-routing.module';

import { WisdomShortsS13Page } from './wisdom-shorts-s13.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS13PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS13Page]
})
export class WisdomShortsS13PageModule {}
