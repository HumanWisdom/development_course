import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { HowToBeginRoutingModule } from './how-to-begin-routing.module';

import { S36000Page } from './s36000/s36000.page';
import { S36001Page } from './s36001/s36001.page';
import { S36002Page } from './s36002/s36002.page';
import { S36003Page } from './s36003/s36003.page';
import { S36004Page } from './s36004/s36004.page';
import { S36005Page } from './s36005/s36005.page';
import { S36005tPage } from './s36005t/s36005t.page';
import { S36006Page } from './s36006/s36006.page';
import { S36007Page } from './s36007/s36007.page';
import { S36008Page } from './s36008/s36008.page';
import { S36009Page } from './s36009/s36009.page';
import { S36009tPage } from './s36009t/s36009t.page';
import { S36010Page } from './s36010/s36010.page';
import { S36011Page } from './s36011/s36011.page';
import { S36012Page } from './s36012/s36012.page';
import { S36013Page } from './s36013/s36013.page';
import { S36014Page } from './s36014/s36014.page';
import { S36014tPage } from './s36014t/s36014t.page';
import { S36015Page } from './s36015/s36015.page';
import { S36016Page } from './s36016/s36016.page';
import { S36017Page } from './s36017/s36017.page';
import { S36018Page } from './s36018/s36018.page';
import { S36019Page } from './s36019/s36019.page';
import { S36020Page } from './s36020/s36020.page';
import { S36021Page } from './s36021/s36021.page';
import { S36021tPage } from './s36021t/s36021t.page';
import { S36022Page } from './s36022/s36022.page';
import { S36023Page } from './s36023/s36023.page';
import { S36024Page } from './s36024/s36024.page';
import { S36025Page } from './s36025/s36025.page';
import { S36026Page } from './s36026/s36026.page';
import { S36027Page } from './s36027/s36027.page';

@NgModule({
  declarations: [
    S36000Page,
    S36001Page,
    S36002Page,
    S36003Page,
    S36004Page,
    S36005Page,
    S36005tPage,
    S36006Page,
    S36007Page,
    S36008Page,
    S36009Page,
    S36009tPage,
    S36010Page,
    S36011Page,
    S36012Page,
    S36013Page,
    S36014Page,
    S36014tPage,
    S36015Page,
    S36016Page,
    S36017Page,
    S36018Page,
    S36019Page,
    S36020Page,
    S36021Page,
    S36021tPage,
    S36022Page,
    S36023Page,
    S36024Page,
    S36025Page,
    S36026Page,
    S36027Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowToBeginRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class HowToBeginModule { }
