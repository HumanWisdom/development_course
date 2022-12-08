import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { ObstaclesEnquiryRoutingModule } from './obstacles-enquiry-routing.module';

import { S43000Page } from './s43000/s43000.page';
import { S43001Page } from './s43001/s43001.page';
import { S43002Page } from './s43002/s43002.page';
import { S43002tPage } from './s43002t/s43002t.page';
import { S43003Page } from './s43003/s43003.page';
import { S43004Page } from './s43004/s43004.page';
import { S43004tPage } from './s43004t/s43004t.page';
import { S43005Page } from './s43005/s43005.page';
import { S43006Page } from './s43006/s43006.page';
import { S43006tPage } from './s43006t/s43006t.page';
import { S43007Page } from './s43007/s43007.page';
import { S43008Page } from './s43008/s43008.page';
import { S43009Page } from './s43009/s43009.page';
import { S43010Page } from './s43010/s43010.page';
import { S43011Page } from './s43011/s43011.page';
import { S43012Page } from './s43012/s43012.page';
import { S43012tPage } from './s43012t/s43012t.page';
import { S43013Page } from './s43013/s43013.page';
import { S43014Page } from './s43014/s43014.page';
import { S43015Page } from './s43015/s43015.page';
import { S43015tPage } from './s43015t/s43015t.page';
import { S43016Page } from './s43016/s43016.page';
import { S43017Page } from './s43017/s43017.page';
import { S43017tPage } from './s43017t/s43017t.page';
import { S43018Page } from './s43018/s43018.page';
import { S43019Page } from './s43019/s43019.page';
import { S43020Page } from './s43020/s43020.page';
import { S43020tPage } from './s43020t/s43020t.page';
import { S43021Page } from './s43021/s43021.page';
import { S43022Page } from './s43022/s43022.page';
import { S43023Page } from './s43023/s43023.page';
import { S43024Page } from './s43024/s43024.page';
import { S43024tPage } from './s43024t/s43024t.page';
import { S43025Page } from './s43025/s43025.page';
import { S43026Page } from './s43026/s43026.page';
import { S43027Page } from './s43027/s43027.page';
import { S43028Page } from './s43028/s43028.page';
import { S43029Page } from './s43029/s43029.page';
import { S43029p1Page } from './s43029p1/s43029p1.page';
import { S43029p2Page } from './s43029p2/s43029p2.page';
import { S43029p3Page } from './s43029p3/s43029p3.page';
import { S43029p4Page } from './s43029p4/s43029p4.page';
import { S43034Page } from './s43034/s43034.page';
import { S43035Page } from './s43035/s43035.page';

@NgModule({
  declarations: [
    S43000Page,
    S43001Page,
    S43002Page,
    S43002tPage,
    S43003Page,
    S43004Page,
    S43004tPage,
    S43005Page,
    S43006Page,
    S43006tPage,
    S43007Page,
    S43008Page,
    S43009Page,
    S43010Page,
    S43011Page,
    S43012Page,
    S43012tPage,
    S43013Page,
    S43014Page,
    S43015Page,
    S43015tPage,
    S43016Page,
    S43017Page,
    S43017tPage,
    S43018Page,
    S43019Page,
    S43020Page,
    S43020tPage,
    S43021Page,
    S43022Page,
    S43023Page,
    S43024Page,
    S43024tPage,
    S43025Page,
    S43026Page,
    S43027Page,
    S43028Page,
    S43029Page,
    S43029p1Page,
    S43029p2Page,
    S43029p3Page,
    S43029p4Page,
    S43034Page,
    S43035Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ObstaclesEnquiryRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class ObstaclesEnquiryModule { }
