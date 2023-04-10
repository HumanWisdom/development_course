import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../../shared/shared.module';

import { HowCanWisdomHelpRoutingModule } from './how-can-wisdom-help-routing.module';

import { S80001Page } from './s80001/s80001.page';
import { S80002Page } from './s80002/s80002.page';
import { S80003Page } from './s80003/s80003.page';
import { S80004Page } from './s80004/s80004.page';
import { S80005Page } from './s80005/s80005.page';
import { S80006Page } from './s80006/s80006.page';
import { S80007Page } from './s80007/s80007.page';
import { S80008Page } from './s80008/s80008.page';
import { S80009Page } from './s80009/s80009.page';
import { S80010Page } from './s80010/s80010.page';
import { S80011Page } from './s80011/s80011.page';
import { S80012Page } from './s80012/s80012.page';

@NgModule({
  declarations: [
    S80001Page,
    S80002Page,
    S80003Page,
    S80004Page,
    S80005Page,
    S80006Page,
    S80007Page,
    S80008Page,
    S80009Page,
    S80010Page,
    S80011Page,
    S80012Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanWisdomHelpRoutingModule
  ]
})
export class HowCanWisdomHelpModule { }
