import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'

import { InsightRoutingModule } from './insight-routing.module';

import { S99001Page } from './s99001/s99001.page';
import { S99002Page } from './s99002/s99002.page';
import { S99003Page } from './s99003/s99003.page';
import { S99004Page } from './s99004/s99004.page';
import { S99004tPage } from './s99004t/s99004t.page';
import { S99005Page } from './s99005/s99005.page';
import { S99006Page } from './s99006/s99006.page';
import { S99007Page } from './s99007/s99007.page';
import { S99007tPage } from './s99007t/s99007t.page';
import { S99008Page } from './s99008/s99008.page';
import { S99008tPage } from './s99008t/s99008t.page';
import { S99009Page } from './s99009/s99009.page';
import { S99009tPage } from './s99009t/s99009t.page';
import { S99010Page } from './s99010/s99010.page';
import { S99011Page } from './s99011/s99011.page';
import { S99012Page } from './s99012/s99012.page';
import { S99013Page } from './s99013/s99013.page';
import { S99013tPage } from './s99013t/s99013t.page';
import { S99014Page } from './s99014/s99014.page';
import { S99015Page } from './s99015/s99015.page';
import { S99016Page } from './s99016/s99016.page';
import { S99016tPage } from './s99016t/s99016t.page';
import { S99017Page } from './s99017/s99017.page';
import { S99017tPage } from './s99017t/s99017t.page';
import { S99018Page } from './s99018/s99018.page';
import { S99019Page } from './s99019/s99019.page';
import { S99020Page } from './s99020/s99020.page';
import { S99021Page } from './s99021/s99021.page';
import { TeenagersService } from '../teenagers.service';

@NgModule({
  declarations: [
    S99001Page,
    S99002Page,
    S99003Page,
    S99004Page,
    S99004tPage,
    S99005Page,
    S99006Page,
    S99007Page,
    S99007tPage,
    S99008Page,
    S99008tPage,
    S99009Page,
    S99009tPage,
    S99010Page,
    S99011Page,
    S99012Page,
    S99013Page,
    S99013tPage,
    S99014Page,
    S99015Page,
    S99016Page,
    S99016tPage,
    S99017Page,
    S99017tPage,
    S99018Page,
    S99019Page,
    S99020Page,
    S99021Page,
    S99021Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    InsightRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class InsightModule { }
