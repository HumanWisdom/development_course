import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { NoticingThoughtsRoutingModule } from './noticing-thoughts-routing.module';

import { S30001Page } from './s30001/s30001.page';
import { S30002Page } from './s30002/s30002.page';
import { S30002tPage } from './s30002t/s30002t.page';
import { S30003Page } from './s30003/s30003.page';
import { S30004Page } from './s30004/s30004.page';
import { S30005Page } from './s30005/s30005.page';
import { S30006Page } from './s30006/s30006.page';
import { S30007Page } from './s30007/s30007.page';

@NgModule({
  declarations: [
    S30001Page,
    S30002Page,
    S30002tPage,
    S30003Page,
    S30004Page,
    S30005Page,
    S30006Page,
    S30007Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NoticingThoughtsRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class NoticingThoughtsModule { }
