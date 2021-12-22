import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS06PageRoutingModule } from './wisdom-shorts-s06-routing.module';

import { WisdomShortsS06Page } from './wisdom-shorts-s06.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS06PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS06Page]
})
export class WisdomShortsS06PageModule {}
