import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'


import { BreathingRoutingModule } from './breathing-routing.module';

import { S107001Page } from './s107001/s107001.page';
import { S107002Page } from './s107002/s107002.page';
import { S107003Page } from './s107003/s107003.page';
import { S107004Page } from './s107004/s107004.page';
import { S107005Page } from './s107005/s107005.page';
import { S107006Page } from './s107006/s107006.page';
import { S107007Page } from './s107007/s107007.page';
import { S107008Page } from './s107008/s107008.page';
import { S107009Page } from './s107009/s107009.page';
import { S107010Page } from './s107010/s107010.page';
import { S107011Page } from './s107011/s107011.page';
import { S107012Page } from './s107012/s107012.page';
import { S107013Page } from './s107013/s107013.page';
import { S107014Page } from './s107014/s107014.page';
import { S107015Page } from './s107015/s107015.page';
import { S107016Page } from './s107016/s107016.page';




// import { S107013Page } from './s107013/s107013.page';
import { TeenagersService } from '../teenagers.service';


@NgModule({
  declarations: [
    S107001Page,
    S107002Page,
    S107003Page,
    S107004Page,
    S107005Page,
    S107006Page,
    S107007Page,
    S107008Page,
    S107009Page,
    S107010Page,
    S107011Page,  
    S107012Page,
    S107013Page,
    S107014Page,
    S107015Page,
     S107016Page
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BreathingRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class BreathingModule { }
