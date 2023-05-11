import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import { NatureRoutingModule } from './nature-routing.module';

import { S106001Page } from './s106001/s106001.page';
import { S106002Page } from './s106002/s106002.page';
import { S106003Page } from './s106003/s106003.page';
import { S106004Page } from './s106004/s106004.page';
import { S106005Page } from './s106005/s106005.page';
import { S106006Page } from './s106006/s106006.page';
import { S106007Page } from './s106007/s106007.page';
import { S106008Page } from './s106008/s106008.page';
import { S106009Page } from './s106009/s106009.page';
import { S106010Page } from './s106010/s106010.page';
import { S106011Page } from './s106011/s106011.page';
import { S106012Page } from './s106012/s106012.page';
import { S106013Page } from './s106013/s106013.page';
import { S106014Page } from './s106014/s106014.page';
import { S106015Page } from './s106015/s106015.page';
import { TeenagersService } from '../teenagers.service';

@NgModule({
  declarations: [
    S106001Page,
    S106002Page,
    S106003Page,
    S106004Page,
    S106005Page,
    S106006Page,
    S106007Page,
    S106008Page,
    S106009Page,
    S106010Page,
    S106011Page,
    S106012Page,
    S106013Page,
    S106014Page,
    S106015Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NatureRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class NatureModule { }
