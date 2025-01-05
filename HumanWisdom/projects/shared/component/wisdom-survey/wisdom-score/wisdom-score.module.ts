import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomScorePageRoutingModule } from './wisdom-score-routing.module';

import { WisdomScorePage } from './wisdom-score.page';
import { SharedModule } from '../../../shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomScorePageRoutingModule,
    SharedModule,
    NgCircleProgressModule.forRoot({
      "radius": 75,
      "space": -5,
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#76C2AF",
      "innerStrokeColor": "#ffffff",
      "innerStrokeWidth": 5,
      "imageSrc": "",
      "imageHeight": 105,
      "imageWidth": 105,
      "showBackground": false
    })
  ],
  declarations: [WisdomScorePage]
})
export class WisdomScorePageModule {}
