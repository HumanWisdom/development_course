import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS04PageRoutingModule } from './wisdom-shorts-s04-routing.module';

import { WisdomShortsS04Page } from './wisdom-shorts-s04.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS04PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS04Page]
})
export class WisdomShortsS04PageModule {}
