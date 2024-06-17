import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule } from '@ionic/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { WisdomScalePageRoutingModule } from './wisdom-scale-routing.module';

import { WisdomScalePage } from './wisdom-scale.page';
import {SharedModule} from '../../../../../../shared/shared.module'
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    FormsModule,
    NgxChartsModule,
    IonicModule,
    WisdomScalePageRoutingModule,
    SharedModule,
    ChartsModule
  ],
  declarations: [WisdomScalePage]
})
export class WisdomScalePageModule {}
