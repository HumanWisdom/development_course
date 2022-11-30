import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { NoJudgementRoutingModule } from './no-judgement-routing.module';

import { S40000Page } from './s40000/s40000.page';
import { S40001Page } from './s40001/s40001.page';
import { S40002Page } from './s40002/s40002.page';
import { S40003Page } from './s40003/s40003.page';
import { S40003tPage } from './s40003t/s40003t.page';
import { S40004Page } from './s40004/s40004.page';
import { S40005Page } from './s40005/s40005.page';
import { S40005tPage } from './s40005t/s40005t.page';
import { S40006Page } from './s40006/s40006.page';
import { S40006tPage } from './s40006t/s40006t.page';
import { S40007Page } from './s40007/s40007.page';
import { S40008Page } from './s40008/s40008.page';
import { S40009Page } from './s40009/s40009.page';
import { S40010Page } from './s40010/s40010.page';
import { S40011Page } from './s40011/s40011.page';
import { S40012Page } from './s40012/s40012.page';
import { S40012tPage } from './s40012t/s40012t.page';
import { S40013Page } from './s40013/s40013.page';
import { S40014Page } from './s40014/s40014.page';
import { S40015Page } from './s40015/s40015.page';
import { S40015p1Page } from './s40015p1/s40015p1.page';
import { S40016Page } from './s40016/s40016.page';

@NgModule({
  declarations: [
    S40000Page,
    S40001Page,
    S40002Page,
    S40003Page,
    S40003tPage,
    S40004Page,
    S40005Page,
    S40005tPage,
    S40006Page,
    S40006tPage,
    S40007Page,
    S40008Page,
    S40009Page,
    S40010Page,
    S40011Page,
    S40012Page,
    S40012tPage,
    S40013Page,
    S40014Page,
    S40015Page,
    S40015p1Page,
    S40016Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NoJudgementRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class NoJudgementModule { }
