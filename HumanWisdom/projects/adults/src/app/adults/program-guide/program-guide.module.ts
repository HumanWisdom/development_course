import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { ProgramGuideRoutingModule } from './program-guide-routing.module';

import { S35001Page } from './s35001/s35001.page';
import { S35002Page } from './s35002/s35002.page';
import { S35003Page } from './s35003/s35003.page';
import { S35003p0Page } from './s35003p0/s35003p0.page';
import { S35004Page } from './s35004/s35004.page';
import { S35004tPage } from './s35004t/s35004t.page';
import { S35005Page } from './s35005/s35005.page';
import { S35005p0Page } from './s35005p0/s35005p0.page';
import { S35005p1Page } from './s35005p1/s35005p1.page';
import { S35005p2Page } from './s35005p2/s35005p2.page';
import { S35005p3Page } from './s35005p3/s35005p3.page';
import { S35005p4Page } from './s35005p4/s35005p4.page';
import { S35005p5Page } from './s35005p5/s35005p5.page';
import { S35005p6Page } from './s35005p6/s35005p6.page';
import { S35005p7Page } from './s35005p7/s35005p7.page';
import { S35005p8Page } from './s35005p8/s35005p8.page';
import { S35005p9Page } from './s35005p9/s35005p9.page';
import { S35005p10Page } from './s35005p10/s35005p10.page';
import { S35006Page } from './s35006/s35006.page';
import { S35007Page } from './s35007/s35007.page';
import { S35008Page } from './s35008/s35008.page';
import { S35008tPage } from './s35008t/s35008t.page';
import { S35009Page } from './s35009/s35009.page';
import { S35009p1Page } from './s35009p1/s35009p1.page';
import { S35009p2Page } from './s35009p2/s35009p2.page';
import { S35009p3Page } from './s35009p3/s35009p3.page';
import { S35009p4Page } from './s35009p4/s35009p4.page';
import { S35009p5Page } from './s35009p5/s35009p5.page';
import { S35009p6Page } from './s35009p6/s35009p6.page';
import { S35009p7Page } from './s35009p7/s35009p7.page';
import { S35009p8Page } from './s35009p8/s35009p8.page';
import { S35009p9Page } from './s35009p9/s35009p9.page';
import { S35009p10Page } from './s35009p10/s35009p10.page';
import { S35009p11Page } from './s35009p11/s35009p11.page';
import { S35009p12Page } from './s35009p12/s35009p12.page';
import { S35009p13Page } from './s35009p13/s35009p13.page';
import { S35009p14Page } from './s35009p14/s35009p14.page';
import { S35009p15Page } from './s35009p15/s35009p15.page';
import { S35010Page } from './s35010/s35010.page';
import { S35011Page } from './s35011/s35011.page';
import { S35011p0Page } from './s35011p0/s35011p0.page';
import { S35012Page } from './s35012/s35012.page';
import { S35013Page } from './s35013/s35013.page';
import { S35014Page } from './s35014/s35014.page';
import { S35015Page } from './s35015/s35015.page';
import { S35016Page } from './s35016/s35016.page';
import { S35017Page } from './s35017/s35017.page';
import { S35018Page } from './s35018/s35018.page';
import { S35019Page } from './s35019/s35019.page';

@NgModule({
  declarations: [
    S35001Page,
    S35002Page,
    S35003Page,
    S35003p0Page,
    S35004Page,
    S35004tPage,
    S35005Page,
    S35005p0Page,
    S35005p1Page,
    S35005p2Page,
    S35005p3Page,
    S35005p4Page,
    S35005p5Page,
    S35005p6Page,
    S35005p7Page,
    S35005p8Page,
    S35005p9Page,
    S35005p10Page,
    S35006Page,
    S35007Page,
    S35008Page,
    S35008tPage,
    S35009Page,
    S35009p1Page,
    S35009p2Page,
    S35009p3Page,
    S35009p4Page,
    S35009p5Page,
    S35009p6Page,
    S35009p7Page,
    S35009p8Page,
    S35009p9Page,
    S35009p10Page,
    S35009p11Page,
    S35009p12Page,
    S35009p13Page,
    S35009p14Page,
    S35009p15Page,
    S35010Page,
    S35011Page,
    S35011p0Page,
    S35012Page,
    S35013Page,
    S35014Page,
    S35015Page,
    S35016Page,    
    S35017Page,
    S35018Page,
    S35019Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ProgramGuideRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class ProgramGuideModule { }
