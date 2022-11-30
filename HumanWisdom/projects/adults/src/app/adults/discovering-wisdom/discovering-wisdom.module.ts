import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { DiscoveringWisdomRoutingModule } from './discovering-wisdom-routing.module';

import { S27001Page } from './s27001/s27001.page';
import { S27002Page } from './s27002/s27002.page';
import { S27003Page } from './s27003/s27003.page';
import { S27004Page } from './s27004/s27004.page';
import { S27004p1Page } from './s27004p1/s27004p1.page';
import { S27005Page } from './s27005/s27005.page';
import { S27005tPage } from './s27005t/s27005t.page';
import { S27006Page } from './s27006/s27006.page';
import { S27007Page } from './s27007/s27007.page';
import { S27008Page } from './s27008/s27008.page';
import { S27009Page } from './s27009/s27009.page';
import { S27010Page } from './s27010/s27010.page';
import { S27011Page } from './s27011/s27011.page';
import { S27012Page } from './s27012/s27012.page';
import { S27013Page } from './s27013/s27013.page';
import { S27014Page } from './s27014/s27014.page';
import { S27015Page } from './s27015/s27015.page';
import { S27016Page } from './s27016/s27016.page';
import { S27017Page } from './s27017/s27017.page';
import { S27018Page } from './s27018/s27018.page';
import { S27019Page } from './s27019/s27019.page';
import { S27020Page } from './s27020/s27020.page';
import { S27021Page } from './s27021/s27021.page';
import { S27022Page } from './s27022/s27022.page';
import { S27023Page } from './s27023/s27023.page';
import { S27024Page } from './s27024/s27024.page';
import { S27025Page } from './s27025/s27025.page';
import { S27026Page } from './s27026/s27026.page';
import { S27027Page } from './s27027/s27027.page';
import { S27028Page } from './s27028/s27028.page';
import { S27029Page } from './s27029/s27029.page';
import { S27030Page } from './s27030/s27030.page';
import { S27031Page } from './s27031/s27031.page';
import { S27032Page } from './s27032/s27032.page';
import { S27033Page } from './s27033/s27033.page';
import { S27034Page } from './s27034/s27034.page';
import { S27035Page } from './s27035/s27035.page';
import { S27036Page } from './s27036/s27036.page';

@NgModule({
  declarations: [
    S27001Page,
    S27002Page,
    S27003Page,
    S27004Page,
    S27004p1Page,
    S27005Page,
    S27005tPage,
    S27006Page,
    S27007Page,
    S27008Page,
    S27009Page,
    S27010Page,
    S27011Page,
    S27012Page,
    S27013Page,
    S27014Page,
    S27015Page,
    S27016Page,
    S27017Page,
    S27018Page,
    S27019Page,
    S27020Page,
    S27021Page,
    S27022Page,
    S27023Page,
    S27024Page,
    S27025Page,
    S27026Page,
    S27027Page,
    S27028Page,
    S27029Page,
    S27030Page,
    S27031Page,
    S27032Page,
    S27033Page,
    S27034Page,
    S27035Page,
    S27036Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DiscoveringWisdomRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class DiscoveringWisdomModule { }
