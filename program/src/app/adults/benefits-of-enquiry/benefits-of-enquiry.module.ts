import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { BenefitsOfEnquiryRoutingModule } from './benefits-of-enquiry-routing.module';

import { S26001Page } from './s26001/s26001.page';
import { S26002Page } from './s26002/s26002.page';
import { S26003Page } from './s26003/s26003.page';
import { S26003tPage } from './s26003t/s26003t.page';
import { S26004Page } from './s26004/s26004.page';
import { S26005Page } from './s26005/s26005.page';
import { S26006Page } from './s26006/s26006.page';
import { S26007Page } from './s26007/s26007.page';
import { S26007tPage } from './s26007t/s26007t.page';
import { S26008Page } from './s26008/s26008.page';
import { S26009Page } from './s26009/s26009.page';
import { S26010Page } from './s26010/s26010.page';
import { S26011Page } from './s26011/s26011.page';
import { S26012Page } from './s26012/s26012.page';
import { S26012tPage } from './s26012t/s26012t.page';
import { S26013Page } from './s26013/s26013.page';
import { S26014Page } from './s26014/s26014.page';
import { S26015Page } from './s26015/s26015.page';
import { S26016Page } from './s26016/s26016.page';
import { S26016tPage } from './s26016t/s26016t.page';
import { S26017Page } from './s26017/s26017.page';
import { S26018Page } from './s26018/s26018.page';
import { S26019Page } from './s26019/s26019.page';
import { S26020Page } from './s26020/s26020.page';
import { S26020tPage } from './s26020t/s26020t.page';
import { S26021Page } from './s26021/s26021.page';
import { S26022Page } from './s26022/s26022.page';
import { S26023Page } from './s26023/s26023.page';
import { S26023tPage } from './s26023t/s26023t.page';
import { S26024Page } from './s26024/s26024.page';
import { S26025Page } from './s26025/s26025.page';
import { S26026Page } from './s26026/s26026.page';
import { S26027Page } from './s26027/s26027.page';
import { S26028Page } from './s26028/s26028.page';
import { S26029Page } from './s26029/s26029.page';

@NgModule({
  declarations: [
    S26001Page,
    S26002Page,
    S26003Page,
    S26003tPage,
    S26004Page,
    S26005Page,
    S26006Page,
    S26007Page,
    S26007tPage,
    S26008Page,
    S26009Page,
    S26010Page,
    S26011Page,
    S26012Page,
    S26012tPage,
    S26013Page,
    S26014Page,
    S26015Page,
    S26016Page,
    S26016tPage,
    S26017Page,
    S26018Page,
    S26019Page,
    S26020Page,
    S26020tPage,
    S26021Page,
    S26022Page,
    S26023Page,
    S26023tPage,
    S26024Page,
    S26025Page,
    S26026Page,
    S26027Page,
    S26028Page,
    S26029Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BenefitsOfEnquiryRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class BenefitsOfEnquiryModule { }
