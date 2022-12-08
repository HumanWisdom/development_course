import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS02PageRoutingModule } from './wisdom-shorts-s02-routing.module';

import { WisdomShortsS02Page } from './wisdom-shorts-s02.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS02PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS02Page]
})
export class WisdomShortsS02PageModule {}
