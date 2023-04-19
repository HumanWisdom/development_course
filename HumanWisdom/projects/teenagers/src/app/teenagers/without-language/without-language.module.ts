import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'

import { WithoutLanguageRoutingModule } from './without-language-routing.module';

import { S103001Page } from './s103001/s103001.page';
import { S103002Page } from './s103002/s103002.page';
import { S103003Page } from './s103003/s103003.page';
import { S103003tPage } from './s103003t/s103003t.page';
import { S103004Page } from './s103004/s103004.page';
import { S103005Page } from './s103005/s103005.page';
import { S103006Page } from './s103006/s103006.page';
import { S103007Page } from './s103007/s103007.page';
import { S103008Page } from './s103008/s103008.page';
import { S103009Page } from './s103009/s103009.page';
import { S103010Page } from './s103010/s103010.page';
import { S103011Page } from './s103011/s103011.page';
import { S103012Page } from './s103012/s103012.page';
import { S103013Page } from './s103013/s103013.page';
import { S103014Page } from './s103014/s103014.page';
import { S103015Page } from './s103015/s103015.page';
import { S103016Page } from './s103016/s103016.page';
import { S103016tPage } from './s103016t/s103016t.page';
import { S103017Page } from './s103017/s103017.page';
import { S103018Page } from './s103018/s103018.page';
import { S103019Page } from './s103019/s103019.page';
import { S103019tPage } from './s103019t/s103019t.page';
import { S103020Page } from './s103020/s103020.page';
import { S103021Page } from './s103021/s103021.page';
import { S103022Page } from './s103022/s103022.page';
import { S103023Page } from './s103023/s103023.page';
import { S103024Page } from './s103024/s103024.page';
import { S103025Page } from './s103025/s103025.page';
import { S103026Page } from './s103026/s103026.page';
import { TeenagersService } from '../teenagers.service';

@NgModule({
  declarations: [
    S103001Page,
    S103002Page,
    S103003Page,
    S103003tPage,
    S103004Page,
    S103005Page,
    S103006Page,
    S103007Page,
    S103008Page,
    S103009Page,
    S103010Page,
    S103011Page,
    S103012Page,
    S103013Page,
    S103014Page,
    S103015Page,
    S103016Page,
    S103016tPage,
    S103017Page,
    S103018Page,
    S103019Page,
    S103019tPage,
    S103020Page,
    S103021Page,
    S103022Page,
    S103023Page,
    S103024Page,
    S103025Page,
    S103026Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WithoutLanguageRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class WithoutLanguageModule { }
