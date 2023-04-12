import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'

import { AwarenessRoutingModule } from './awareness-routing.module';

import { S100001Page } from './s100001/s100001.page';
import { S100002Page } from './s100002/s100002.page';
import { S100003Page } from './s100003/s100003.page';
import { S100004Page } from './s100004/s100004.page';
import { S100005Page } from './s100005/s100005.page';
import { S100005tPage } from './s100005t/s100005t.page';
import { S100006Page } from './s100006/s100006.page';
import { S100006tPage } from './s100006t/s100006t.page';
import { S100007Page } from './s100007/s100007.page';
import { S100007tPage } from './s100007t/s100007t.page';
import { S100008Page } from './s100008/s100008.page';
import { S100008tPage } from './s100008t/s100008t.page';
import { S100009Page } from './s100009/s100009.page';
import { S100010Page } from './s100010/s100010.page';
import { S100010tPage } from './s100010t/s100010t.page';
import { S100011Page } from './s100011/s100011.page';
import { S100012Page } from './s100012/s100012.page';
import { S100012tPage } from './s100012t/s100012t.page';
import { S100013Page } from './s100013/s100013.page';
import { S100014Page } from './s100014/s100014.page';
import { S100015Page } from './s100015/s100015.page';
import { S100015tPage } from './s100015t/s100015t.page';
import { S100016Page } from './s100016/s100016.page';
import { S100016tPage } from './s100016t/s100016t.page';
import { S100017Page } from './s100017/s100017.page';
import { S100018Page } from './s100018/s100018.page';
import { S100019Page } from './s100019/s100019.page';
import { S100020Page } from './s100020/s100020.page';
import { S100021Page } from './s100021/s100021.page';
import { S100022Page } from './s100022/s100022.page';
import { S100023Page } from './s100023/s100023.page';
import { S100024Page } from './s100024/s100024.page';
import { S100025Page } from './s100025/s100025.page';
import { S100026Page } from './s100026/s100026.page';
import { S100027Page } from './s100027/s100027.page';
import { S100028Page } from './s100028/s100028.page';
import { TeenagersService } from '../teenagers.service';

@NgModule({
  declarations: [
    S100001Page,
    S100002Page,
    S100003Page,
    S100004Page,
    S100005Page,
    S100005tPage,
    S100006Page,
    S100006tPage,
    S100007Page,
    S100007tPage,
    S100008Page,
    S100008tPage,
    S100009Page,
    S100010Page,
    S100010tPage,
    S100011Page,
    S100012Page,
    S100012tPage,
    S100013Page,
    S100014Page,
    S100015Page,
    S100015tPage,
    S100016Page,
    S100016tPage,
    S100017Page,
    S100018Page,
    S100019Page,
    S100020Page,
    S100021Page,
    S100022Page,
    S100023Page,
    S100024Page,
    S100025Page,
    S100026Page,
    S100027Page,
    S100028Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AwarenessRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class AwarenessModule { }
