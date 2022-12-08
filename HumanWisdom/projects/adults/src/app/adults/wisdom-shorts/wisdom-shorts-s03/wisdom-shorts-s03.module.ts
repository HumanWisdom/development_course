import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS03PageRoutingModule } from './wisdom-shorts-s03-routing.module';

import { WisdomShortsS03Page } from './wisdom-shorts-s03.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS03PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS03Page]
})
export class WisdomShortsS03PageModule {}
