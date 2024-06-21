import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WisdomSurveyInsightRoutingModule } from './wisdom-survey-insight-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { WisdomSurveyInsightComponent } from './wisdom-survey-insight.component';
import { SharedModule } from './../../../shared.module';


@NgModule({
  declarations: [WisdomSurveyInsightComponent],
  imports: [
    CommonModule,
    WisdomSurveyInsightRoutingModule,
    SharedModule,
    NgxChartsModule,
    IonicModule,
  ]
})
export class WisdomSurveyInsightModule { }
