import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WisdomSurveyRoutingModule } from './wisdom-survey-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxChartsModule,
    // BrowserAnimationsModule,
    WisdomSurveyRoutingModule
  ]
})
export class WisdomSurveyModule { }
