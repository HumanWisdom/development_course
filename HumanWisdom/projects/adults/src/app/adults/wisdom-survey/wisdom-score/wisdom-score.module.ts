import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomScorePageRoutingModule } from './wisdom-score-routing.module';

import { WisdomScorePage } from './wisdom-score.page';
import {SharedModule} from '../../../../../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomScorePageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomScorePage]
})
export class WisdomScorePageModule {}
