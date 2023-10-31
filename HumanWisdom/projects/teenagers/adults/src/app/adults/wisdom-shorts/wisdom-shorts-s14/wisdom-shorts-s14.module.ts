import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS14PageRoutingModule } from './wisdom-shorts-s14-routing.module';

import { WisdomShortsS14Page } from './wisdom-shorts-s14.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS14PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS14Page]
})
export class WisdomShortsS14PageModule {}
