import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'

import { HowToBeginRoutingModule } from './how-to-begin-routing.module';
import { S96001Page } from './s96001/s96001.page';
import { S96002Page } from './s96002/s96002.page';
import { S96003Page } from './s96003/s96003.page';
import { S96004Page } from './s96004/s96004.page';
import { S96005Page } from './s96005/s96005.page';
import { S96006Page } from './s96006/s96006.page';
import { S96006tPage } from './s96006t/s96006t.page';
import { S96007Page } from './s96007/s96007.page';
import { S96008Page } from './s96008/s96008.page';
import { S96009Page } from './s96009/s96009.page';
import { S96010Page } from './s96010/s96010.page';
import { S96010tPage } from './s96010t/s96010t.page';
import { S96011Page } from './s96011/s96011.page';
import { S96012Page } from './s96012/s96012.page';
import { S96013Page } from './s96013/s96013.page';
import { S96014Page } from './s96014/s96014.page';
import { S96015Page } from './s96015/s96015.page';
import { S96015tPage } from './s96015t/s96015t.page';
import { S96016Page } from './s96016/s96016.page';
import { S96017Page } from './s96017/s96017.page';
import { S96018Page } from './s96018/s96018.page';
import { S96019Page } from './s96019/s96019.page';
import { S96020Page } from './s96020/s96020.page';
import { S96021Page } from './s96021/s96021.page';
import { S96022Page } from './s96022/s96022.page';
import { S96022tPage } from './s96022t/s96022t.page';
import { S96023Page } from './s96023/s96023.page';
import { S96024Page } from './s96024/s96024.page';
import { S96025Page } from './s96025/s96025.page';
import { S96026Page } from './s96026/s96026.page';
import { S96027Page } from './s96027/s96027.page';
import { S96028Page } from './s96028/s96028.page';
import { TeenagersService } from '../teenagers.service';

@NgModule({
  declarations: [
    S96001Page,
    S96002Page,
    S96003Page,
    S96004Page,
    S96005Page,
    S96006Page,
    S96006tPage,
    S96007Page,
    S96008Page,
    S96009Page,
    S96010Page,
    S96010tPage,
    S96011Page,
    S96012Page,
    S96013Page,
    S96014Page,
    S96015Page,
    S96015tPage,
    S96016Page,
    S96017Page,
    S96018Page,
    S96019Page,
    S96020Page,
    S96021Page,
    S96022Page,
    S96022tPage,
    S96023Page,
    S96024Page,
    S96025Page,
    S96026Page,
    S96027Page,
    S96028Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowToBeginRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class HowToBeginModule { }
