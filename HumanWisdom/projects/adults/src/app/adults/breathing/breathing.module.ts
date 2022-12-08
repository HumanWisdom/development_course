import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';


import { BreathingRoutingModule } from './breathing-routing.module';

import { S29000Page } from './s29000/s29000.page';
import { S29001Page } from './s29001/s29001.page';
import { S29002Page } from './s29002/s29002.page';
import { S29003Page } from './s29003/s29003.page';
import { S29004Page } from './s29004/s29004.page';
import { S29005Page } from './s29005/s29005.page';
import { S29006Page } from './s29006/s29006.page';
import { S29007Page } from './s29007/s29007.page';
import { S29008Page } from './s29008/s29008.page';
import { S29009Page } from './s29009/s29009.page';
import { S29010Page } from './s29010/s29010.page';


@NgModule({
  declarations: [
    S29000Page,
    S29001Page,
    S29002Page,
    S29003Page,
    S29004Page,
    S29005Page,
    S29006Page,
    S29007Page,
    S29008Page,
    S29009Page,
    S29010Page   
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BreathingRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class BreathingModule { }
