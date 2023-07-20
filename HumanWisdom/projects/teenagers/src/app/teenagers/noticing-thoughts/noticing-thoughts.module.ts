import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'

import { NoticingThoughtsRoutingModule } from './noticing-thoughts-routing.module';

import { S108001Page } from './s108001/s108001.page';
import { S108002Page } from './s108002/s108002.page';
import { S108002tPage } from './s108002t/s108002t.page';
import { S108003Page } from './s108003/s108003.page';
import { S108004Page } from './s108004/s108004.page';
import { S108005Page } from './s108005/s108005.page';
import { S108006Page } from './s108006/s108006.page';
import { S108007Page } from './s108007/s108007.page';
import { TeenagersService } from '../teenagers.service';

@NgModule({
  declarations: [
    S108001Page,
    S108002Page,
    S108002tPage,
    S108003Page,
    S108004Page,
    S108005Page,
    S108006Page,
    S108007Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NoticingThoughtsRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class NoticingThoughtsModule { }
