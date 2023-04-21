import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'

import { NoJudgementRoutingModule } from './no-judgement-routing.module';

import { S101001Page } from './s101001/s101001.page';
import { S101002Page } from './s101002/s101002.page';
import { S101003Page } from './s101003/s101003.page';
import { S101004Page } from './s101004/s101004.page';
import { S101004tPage } from './s101004t/s101004t.page';
import { S101005Page } from './s101005/s101005.page';
import { S101006Page } from './s101006/s101006.page';
import { S101006tPage } from './s101006t/s101006t.page';
import { S101007Page } from './s101007/s101007.page';
import { S101007tPage } from './s101007t/s101007t.page';
import { S101008Page } from './s101008/s101008.page';
import { S101009Page } from './s101009/s101009.page'
import { S101010Page } from './s101010/s101010.page';
import { S101010tPage } from './s101010t/s101010t.page';
import { S101011Page } from './s101011/s101011.page';
import { S101012Page } from './s101012/s101012.page';
import { S101013Page } from './s101013/s101013.page';
import { S101014Page } from './s101014/s101014.page';
import { S101014tPage } from './s101014t/s101014t.page';
import { S101015Page } from './s101015/s101015.page';
import { S101015tPage } from './s101015t/s101015t.page';
import { S101016Page } from './s101016/s101016.page';
import { S101017Page } from './s101017/s101017.page';
import { S101018Page } from './s101018/s101018.page';
import { S101019Page } from './s101019/s101019.page';
import { S101020Page } from './s101020/s101020.page';
import { S101021Page } from './s101021/s101021.page';
import { S101022Page } from './s101022/s101022.page';
import { S101023Page } from './s101023/s101023.page';
import { TeenagersService } from '../teenagers.service';

@NgModule({
  declarations: [
    S101001Page,
    S101002Page,
    S101003Page,
    S101004Page,
    S101004tPage,
    S101005Page,
    S101006Page,
    S101006tPage,
    S101007Page,
    S101007tPage,
    S101008Page,
    S101009Page,
    S101010Page,
    S101010tPage,
    S101011Page,
    S101012Page,
    S101013Page,
    S101014Page,
    S101014tPage,
    S101015Page,
    S101015tPage,
    S101016Page,
    S101017Page,
    S101018Page,
    S101019Page,
    S101020Page,
    S101021Page,
    S101022Page,
    S101023Page,
      ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NoJudgementRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class NoJudgementModule { }
