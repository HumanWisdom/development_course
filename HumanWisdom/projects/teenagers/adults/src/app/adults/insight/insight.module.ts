import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { InsightRoutingModule } from './insight-routing.module';

import { S38000Page } from './s38000/s38000.page';
import { S38001Page } from './s38001/s38001.page';
import { S38002Page } from './s38002/s38002.page';
import { S38003Page } from './s38003/s38003.page';
import { S38003tPage } from './s38003t/s38003t.page';
import { S38004Page } from './s38004/s38004.page';
import { S38005Page } from './s38005/s38005.page';
import { S38006Page } from './s38006/s38006.page';
import { S38006tPage } from './s38006t/s38006t.page';
import { S38007Page } from './s38007/s38007.page';
import { S38007tPage } from './s38007t/s38007t.page';
import { S38008Page } from './s38008/s38008.page';
import { S38008tPage } from './s38008t/s38008t.page';
import { S38009Page } from './s38009/s38009.page';
import { S38010Page } from './s38010/s38010.page';
import { S38011Page } from './s38011/s38011.page';
import { S38012Page } from './s38012/s38012.page';
import { S38012tPage } from './s38012t/s38012t.page';
import { S38013Page } from './s38013/s38013.page';
import { S38014Page } from './s38014/s38014.page';
import { S38015Page } from './s38015/s38015.page';
import { S38015tPage } from './s38015t/s38015t.page';
import { S38016Page } from './s38016/s38016.page';
import { S38016tPage } from './s38016t/s38016t.page';
import { S38017Page } from './s38017/s38017.page';
import { S38018Page } from './s38018/s38018.page';
import { S38019Page } from './s38019/s38019.page';
import { S38019p1Page } from './s38019p1/s38019p1.page';
import { S38019p2Page } from './s38019p2/s38019p2.page';
import { S38019p3Page } from './s38019p3/s38019p3.page';
import { S38019p4Page } from './s38019p4/s38019p4.page';
import { S38019p5Page } from './s38019p5/s38019p5.page';
import { S38019p6Page } from './s38019p6/s38019p6.page';
import { S38019p7Page } from './s38019p7/s38019p7.page';
import { S38019p8Page } from './s38019p8/s38019p8.page';
import { S38020Page } from './s38020/s38020.page';

@NgModule({
  declarations: [
    S38000Page,
    S38001Page,
    S38002Page,
    S38003Page,
    S38003tPage,
    S38004Page,
    S38005Page,
    S38006Page,
    S38006tPage,
    S38007Page,
    S38007tPage,
    S38008Page,
    S38008tPage,
    S38009Page,
    S38010Page,
    S38011Page,
    S38012Page,
    S38012tPage,
    S38013Page,
    S38014Page,
    S38015Page,
    S38015tPage,
    S38016Page,
    S38016tPage,
    S38017Page,
    S38018Page,
    S38019Page,
    S38019p1Page,
    S38019p2Page,
    S38019p3Page,
    S38019p4Page,
    S38019p5Page,
    S38019p6Page,
    S38019p7Page,
    S38019p8Page,
    S38020Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    InsightRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class InsightModule { }
