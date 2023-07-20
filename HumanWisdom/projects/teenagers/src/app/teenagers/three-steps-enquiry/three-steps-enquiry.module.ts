import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import { ThreeStepsEnquiryRoutingModule } from './three-steps-enquiry-routing.module';

import { S97001Page } from './s97001/s97001.page';
import { S97002Page } from './s97002/s97002.page';
import { S97003Page } from './s97003/s97003.page';
import { S97004Page } from './s97004/s97004.page';
import { S97004tPage } from './s97004t/s97004t.page';
import { S97005Page } from './s97005/s97005.page';
import { S97006Page } from './s97006/s97006.page';
import { S97006tPage } from './s97006t/s97006t.page';
import { S97007Page } from './s97007/s97007.page';
import { S97008Page } from './s97008/s97008.page';
import { S97008tPage } from './s97008t/s97008t.page';
import { S97009Page } from './s97009/s97009.page';
import { S97010Page } from './s97010/s97010.page';
import { S97010tPage } from './s97010t/s97010t.page';
import { S97011Page } from './s97011/s97011.page';
import { S97012Page } from './s97012/s97012.page';
import { S97013Page } from './s97013/s97013.page';
import { S97014Page } from './s97014/s97014.page';
import { S97015Page } from './s97015/s97015.page';
import { S97016Page } from './s97016/s97016.page';
import { S97017Page } from './s97017/s97017.page';
import { S97018Page } from './s97018/s97018.page';
import { S97018p1Page } from './s97018p1/s97018p1.page';
import { S97019Page } from './s97019/s97019.page';
import { TeenagersService } from '../teenagers.service';

@NgModule({
  declarations: [
    S97001Page,
    S97002Page,
    S97003Page,
    S97004Page,
    S97004tPage,
    S97005Page,
    S97006Page,
    S97006tPage,
    S97007Page,
    S97008Page,
    S97008tPage,
    S97009Page,
    S97010Page,
    S97010tPage,
    S97011Page,
    S97012Page,
    S97013Page,
    S97014Page,
    S97015Page,
    S97016Page,
    S97017Page,
    S97018Page,
    S97018p1Page,
    S97019Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ThreeStepsEnquiryRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class ThreeStepsEnquiryModule { }
