import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { GetSupportNowRoutingModule } from './get-support-now-routing.module';

import { S71001Page } from './s71001/s71001.page';
import { S71002Page } from './s71002/s71002.page';
import { S71003Page } from './s71003/s71003.page';
import { S71004Page } from './s71004/s71004.page';
import { S71005Page } from './s71005/s71005.page';

@NgModule({
  declarations: [
    S71001Page,
    S71002Page,
    S71003Page,
    S71004Page,
    S71005Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    GetSupportNowRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class GetSupportNowModule { }
