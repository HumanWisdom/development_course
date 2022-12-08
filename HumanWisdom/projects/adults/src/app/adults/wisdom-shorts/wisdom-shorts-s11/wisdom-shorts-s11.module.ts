import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomShortsS11PageRoutingModule } from './wisdom-shorts-s11-routing.module';

import { WisdomShortsS11Page } from './wisdom-shorts-s11.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomShortsS11PageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomShortsS11Page]
})
export class WisdomShortsS11PageModule {}
