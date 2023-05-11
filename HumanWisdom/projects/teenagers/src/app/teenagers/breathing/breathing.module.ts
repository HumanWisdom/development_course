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
    S107011Page   
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
