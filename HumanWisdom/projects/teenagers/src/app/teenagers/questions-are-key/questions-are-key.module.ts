import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'

import { QuestionsAreKeyRoutingModule } from './questions-are-key-routing.module';

import { S102001Page } from './s102001/s102001.page';
import { S102002Page } from './s102002/s102002.page';
import { S102003Page } from './s102003/s102003.page';
import { S102004Page } from './s102004/s102004.page';
import { S102004tPage } from './s102004t/s102004t.page';
import { S102005Page } from './s102005/s102005.page';
import { S102005tPage } from './s102005t/s102005t.page';
import { S102006Page } from './s102006/s102006.page';
import { S102007Page } from './s102007/s102007.page';
import { S102008Page } from './s102008/s102008.page';
import { S102009Page } from './s102009/s102009.page';
import { S102010Page } from './s102010/s102010.page';
import { S102011Page } from './s102011/s102011.page';
import { S102012Page } from './s102012/s102012.page';
import { S102013Page } from './s102013/s102013.page';
import { S102014Page } from './s102014/s102014.page';
import { S102015Page } from './s102015/s102015.page';
import { S102016Page } from './s102016/s102016.page';
import { S102017Page } from './s102017/s102017.page';
import { S102017tPage } from './s102017t/s102017t.page';
import { S102018Page } from './s102018/s102018.page';
import { S102019Page } from './s102019/s102019.page';
import { S102020Page } from './s102020/s102020.page';
import { S102021Page } from './s102021/s102021.page';
import { S102022Page } from './s102022/s102022.page';
import { TeenagersService } from '../teenagers.service';

@NgModule({
  declarations: [
    S102001Page,
    S102002Page,
    S102003Page,
    S102004Page,
    S102004tPage,
    S102005Page,
    S102005tPage,
    S102006Page,
    S102007Page,
    S102008Page,
    S102009Page,
    S102010Page,
    S102011Page,
    S102012Page,
    S102013Page,
    S102014Page,
    S102015Page,
    S102016Page,
    S102017Page,
    S102017tPage,
    S102018Page,
    S102019Page,
    S102020Page,
    S102021Page,
    S102022Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    QuestionsAreKeyRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class QuestionsAreKeyModule { }
