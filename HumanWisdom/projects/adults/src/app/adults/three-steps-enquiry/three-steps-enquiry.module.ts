import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { ThreeStepsEnquiryRoutingModule } from './three-steps-enquiry-routing.module';

import { S37000Page } from './s37000/s37000.page';
import { S37001Page } from './s37001/s37001.page';
import { S37002Page } from './s37002/s37002.page';
import { S37003Page } from './s37003/s37003.page';
import { S37003tPage } from './s37003t/s37003t.page';
import { S37004Page } from './s37004/s37004.page';
import { S37005Page } from './s37005/s37005.page';
import { S37005tPage } from './s37005t/s37005t.page';
import { S37006Page } from './s37006/s37006.page';
import { S37007Page } from './s37007/s37007.page';
import { S37007tPage } from './s37007t/s37007t.page';
import { S37008Page } from './s37008/s37008.page';
import { S37009Page } from './s37009/s37009.page';
import { S37009tPage } from './s37009t/s37009t.page';
import { S37010Page } from './s37010/s37010.page';
import { S37011Page } from './s37011/s37011.page';
import { S37012Page } from './s37012/s37012.page';
import { S37013Page } from './s37013/s37013.page';
import { S37014Page } from './s37014/s37014.page';
import { S37015Page } from './s37015/s37015.page';
import { S37016Page } from './s37016/s37016.page';
import { S37017Page } from './s37017/s37017.page';
import { S37018Page } from './s37018/s37018.page';

@NgModule({
  declarations: [
    S37000Page,
    S37001Page,
    S37002Page,
    S37003Page,
    S37003tPage,
    S37004Page,
    S37005Page,
    S37005tPage,
    S37006Page,
    S37007Page,
    S37007tPage,
    S37008Page,
    S37009Page,
    S37009tPage,
    S37010Page,
    S37011Page,
    S37012Page,
    S37013Page,
    S37014Page,
    S37015Page,
    S37016Page,
    S37017Page,
    S37018Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ThreeStepsEnquiryRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class ThreeStepsEnquiryModule { }
