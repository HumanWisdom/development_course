import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { S32001Page } from './s32001/s32001.page';  
import { S32002Page } from './s32002/s32002.page';  
import { S32003Page } from './s32003/s32003.page';  
import { S32004Page } from './s32004/s32004.page';
import { S32004tPage } from './s32004t/s32004t.page';
import { S32005Page } from './s32005/s32005.page';  
import { S32006Page } from './s32006/s32006.page'; 
import { S32006p1Page } from './s32006p1/s32006p1.page'; 
import { S32006p2Page } from './s32006p2/s32006p2.page'; 
import { S32006p3Page } from './s32006p3/s32006p3.page'; 
import { S32006p4Page } from './s32006p4/s32006p4.page'; 
import { S32006p5Page } from './s32006p5/s32006p5.page'; 
import { S32006p6Page } from './s32006p6/s32006p6.page'; 
import { S32006p7Page } from './s32006p7/s32006p7.page'; 
import { S32006p8Page } from './s32006p8/s32006p8.page'; 
import { S32006p9Page } from './s32006p9/s32006p9.page'; 
import { S32006p10Page } from './s32006p10/s32006p10.page'; 
import { S32006p11Page } from './s32006p11/s32006p11.page';  
import { S32007Page } from './s32007/s32007.page';  
import { S32008Page } from './s32008/s32008.page';  
import { S32009Page } from './s32009/s32009.page';  
import { S32010Page } from './s32010/s32010.page';  
import { S32011Page } from './s32011/s32011.page';  
import { S32012Page } from './s32012/s32012.page';  
import { S32012tPage } from './s32012t/s32012t.page';  
import { S32013Page } from './s32013/s32013.page';  
import { S32014Page } from './s32014/s32014.page';  
import { S32015Page } from './s32015/s32015.page';  

import { BenefitsOfWisdomRoutingModule } from './benefits-of-wisdom-routing.module';

@NgModule({
  declarations: [
    S32001Page,
    S32002Page,
    S32003Page,
    S32004Page,
    S32004tPage,
    S32005Page,
    S32006Page,
    S32006p1Page,
    S32006p2Page,
    S32006p3Page,
    S32006p4Page,
    S32006p5Page,
    S32006p6Page,
    S32006p7Page,
    S32006p8Page,
    S32006p9Page,
    S32006p10Page,
    S32006p11Page,
    S32007Page,
    S32008Page,
    S32009Page,
    S32010Page,
    S32011Page,
    S32012Page,
    S32012tPage,
    S32013Page,
    S32014Page,
    S32015Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BenefitsOfWisdomRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class BenefitsOfWisdomModule { }
