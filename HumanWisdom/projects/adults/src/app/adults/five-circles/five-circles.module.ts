import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { FiveCirclesRoutingModule } from './five-circles-routing.module';

import { S33001Page } from './s33001/s33001.page';
import { S33002Page } from './s33002/s33002.page';
import { S33003Page } from './s33003/s33003.page';
import { S33004Page } from './s33004/s33004.page';
import { S33004tPage } from './s33004t/s33004t.page';
import { S33005Page } from './s33005/s33005.page';
import { S33005tPage } from './s33005t/s33005t.page';
import { S33006Page } from './s33006/s33006.page';
import { S33007Page } from './s33007/s33007.page';
import { S33007tPage } from './s33007t/s33007t.page';
import { S33008Page } from './s33008/s33008.page';
import { S33009Page } from './s33009/s33009.page';
import { S33010Page } from './s33010/s33010.page';
import { S33011Page } from './s33011/s33011.page';
import { S33011tPage } from './s33011t/s33011t.page';
import { S33012Page } from './s33012/s33012.page';
import { S33013Page } from './s33013/s33013.page';
import { S33013tPage } from './s33013t/s33013t.page';
import { S33014Page } from './s33014/s33014.page';
import { S33015Page } from './s33015/s33015.page';
import { S33015tPage } from './s33015t/s33015t.page';
import { S33016Page } from './s33016/s33016.page';
import { S33017Page } from './s33017/s33017.page';
import { S33018Page } from './s33018/s33018.page';
import { S33018tPage } from './s33018t/s33018t.page';
import { S33019Page } from './s33019/s33019.page';
import { S33020Page } from './s33020/s33020.page';
import { S33021Page } from './s33021/s33021.page';
import { S33022Page } from './s33022/s33022.page';


@NgModule({
  declarations: [
    S33001Page,
    S33002Page,
    S33003Page,
    S33004Page,
    S33004tPage,
    S33005Page,
    S33005tPage,
    S33006Page,
    S33007Page,
    S33007tPage,
    S33008Page,
    S33009Page,
    S33010Page,
    S33011Page,
    S33011tPage,
    S33012Page,
    S33013Page,
    S33013tPage,
    S33014Page,
    S33015Page,
    S33015tPage,
    S33016Page,    
    S33017Page,
    S33018Page,
    S33018tPage,
    S33019Page,
    S33020Page,
    S33021Page,
    S33022Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FiveCirclesRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class FiveCirclesModule { }
