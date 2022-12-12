import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { QuestionsAreKeyRoutingModule } from './questions-are-key-routing.module';

import { S41000Page } from './s41000/s41000.page';
import { S41001Page } from './s41001/s41001.page';
import { S41002Page } from './s41002/s41002.page';
import { S41003Page } from './s41003/s41003.page';
import { S41003tPage } from './s41003t/s41003t.page';
import { S41004Page } from './s41004/s41004.page';
import { S41004tPage } from './s41004t/s41004t.page';
import { S41005Page } from './s41005/s41005.page';
import { S41006Page } from './s41006/s41006.page';
import { S41007Page } from './s41007/s41007.page';
import { S41008Page } from './s41008/s41008.page';
import { S41009Page } from './s41009/s41009.page';
import { S41010Page } from './s41010/s41010.page';
import { S41011Page } from './s41011/s41011.page';
import { S41012Page } from './s41012/s41012.page';
import { S41013Page } from './s41013/s41013.page';
import { S41014Page } from './s41014/s41014.page';
import { S41015Page } from './s41015/s41015.page';
import { S41016Page } from './s41016/s41016.page';
import { S41016tPage } from './s41016t/s41016t.page';
import { S41017Page } from './s41017/s41017.page';
import { S41018Page } from './s41018/s41018.page';
import { S41019Page } from './s41019/s41019.page';
import { S41019p1Page } from './s41019p1/s41019p1.page';
import { S41019p2Page } from './s41019p2/s41019p2.page';
import { S41019p3Page } from './s41019p3/s41019p3.page';
import { S41019p4Page } from './s41019p4/s41019p4.page';
import { S41019p5Page } from './s41019p5/s41019p5.page';
import { S41019p6Page } from './s41019p6/s41019p6.page';
import { S41019p7Page } from './s41019p7/s41019p7.page';
import { S41019p8Page } from './s41019p8/s41019p8.page';
import { S41020Page } from './s41020/s41020.page';

@NgModule({
  declarations: [
    S41000Page,
    S41001Page,
    S41002Page,
    S41003Page,
    S41003tPage,
    S41004Page,
    S41004tPage,
    S41005Page,
    S41006Page,
    S41007Page,
    S41008Page,
    S41009Page,
    S41010Page,
    S41011Page,
    S41012Page,
    S41013Page,
    S41014Page,
    S41015Page,
    S41016Page,
    S41016tPage,
    S41017Page,
    S41018Page,
    S41019Page,
    S41019p1Page,
    S41019p2Page,
    S41019p3Page,
    S41019p4Page,
    S41019p5Page,
    S41019p6Page,
    S41019p7Page,
    S41019p8Page,
    S41020Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    QuestionsAreKeyRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class QuestionsAreKeyModule { }
