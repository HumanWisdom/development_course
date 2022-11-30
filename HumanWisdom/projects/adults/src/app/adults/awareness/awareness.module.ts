import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { AwarenessRoutingModule } from './awareness-routing.module';

import { S39000Page } from './s39000/s39000.page';
import { S39001Page } from './s39001/s39001.page';
import { S39002Page } from './s39002/s39002.page';
import { S39003Page } from './s39003/s39003.page';
import { S39004Page } from './s39004/s39004.page';
import { S39004tPage } from './s39004t/s39004t.page';
import { S39005Page } from './s39005/s39005.page';
import { S39005tPage } from './s39005t/s39005t.page';
import { S39006Page } from './s39006/s39006.page';
import { S39006tPage } from './s39006t/s39006t.page';
import { S39007Page } from './s39007/s39007.page';
import { S39007tPage } from './s39007t/s39007t.page';
import { S39008Page } from './s39008/s39008.page';
import { S39009Page } from './s39009/s39009.page';
import { S39009tPage } from './s39009t/s39009t.page';
import { S39011Page } from './s39011/s39011.page';
import { S39012Page } from './s39012/s39012.page';
import { S39012tPage } from './s39012t/s39012t.page';
import { S39013Page } from './s39013/s39013.page';
import { S39014Page } from './s39014/s39014.page';
import { S39015Page } from './s39015/s39015.page';
import { S39016Page } from './s39016/s39016.page';
import { S39016tPage } from './s39016t/s39016t.page';
import { S39017Page } from './s39017/s39017.page';
import { S39017tPage } from './s39017t/s39017t.page';
import { S39018Page } from './s39018/s39018.page';
import { S39019Page } from './s39019/s39019.page';
import { S39020Page } from './s39020/s39020.page';
import { S39021Page } from './s39021/s39021.page';
import { S39022Page } from './s39022/s39022.page';
import { S39023Page } from './s39023/s39023.page';
import { S39024Page } from './s39024/s39024.page';
import { S39025Page } from './s39025/s39025.page';
import { S39026Page } from './s39026/s39026.page';
import { S39027Page } from './s39027/s39027.page';
import { S39028Page } from './s39028/s39028.page';
import { S39029Page } from './s39029/s39029.page';

@NgModule({
  declarations: [
    S39000Page,
    S39001Page,
    S39002Page,
    S39003Page,
    S39004Page,
    S39004tPage,
    S39005Page,
    S39005tPage,
    S39006Page,
    S39006tPage,
    S39007Page,
    S39007tPage,
    S39008Page,
    S39009Page,
    S39009tPage,
    S39011Page,
    S39012Page,
    S39012tPage,
    S39013Page,
    S39014Page,
    S39015Page,
    S39016Page,
    S39016tPage,
    S39017Page,
    S39017tPage,
    S39018Page,
    S39019Page,
    S39020Page,
    S39021Page,
    S39022Page,
    S39023Page,
    S39024Page,
    S39025Page,
    S39026Page,
    S39027Page,
    S39028Page,
    S39029Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AwarenessRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class AwarenessModule { }
