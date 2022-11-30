import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { WithoutLanguageRoutingModule } from './without-language-routing.module';

import { S42001Page } from './s42001/s42001.page';
import { S42000Page } from './s42000/s42000.page';
import { S42002Page } from './s42002/s42002.page';
import { S42002tPage } from './s42002t/s42002t.page';
import { S42003Page } from './s42003/s42003.page';
import { S42004Page } from './s42004/s42004.page';
import { S42005Page } from './s42005/s42005.page';
import { S42006Page } from './s42006/s42006.page';
import { S42007Page } from './s42007/s42007.page';
import { S42008Page } from './s42008/s42008.page';
import { S42009Page } from './s42009/s42009.page';
import { S42010Page } from './s42010/s42010.page';
import { S42011Page } from './s42011/s42011.page';
import { S42012Page } from './s42012/s42012.page';
import { S42012tPage } from './s42012t/s42012t.page';
import { S42013Page } from './s42013/s42013.page';
import { S42014Page } from './s42014/s42014.page';
import { S42015Page } from './s42015/s42015.page';
import { S42015tPage } from './s42015t/s42015t.page';
import { S42016Page } from './s42016/s42016.page';
import { S42017Page } from './s42017/s42017.page';
import { S42018Page } from './s42018/s42018.page';
import { S42019Page } from './s42019/s42019.page';
import { S42020Page } from './s42020/s42020.page';
import { S42021Page } from './s42021/s42021.page';
import { S42022Page } from './s42022/s42022.page';

@NgModule({
  declarations: [
    S42001Page,
    S42004Page,
    S42006Page,
    S42008Page,
    S42018Page,
    S42020Page,
    S42009Page,
    S42011Page,
    S42014Page,
    S42016Page,
    S42017Page,
    S42019Page,
    S42002Page,
    S42002tPage,
    S42012Page,
    S42012tPage,
    S42015Page,
    S42015tPage,
    S42021Page,
    S42022Page,
    S42010Page,
    S42013Page,
    S42003Page,
    S42005Page,
    S42007Page,
    S42000Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WithoutLanguageRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class WithoutLanguageModule { }
