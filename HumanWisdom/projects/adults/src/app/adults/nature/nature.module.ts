import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { NatureRoutingModule } from './nature-routing.module';

import { S28001Page } from './s28001/s28001.page';
import { S28002Page } from './s28002/s28002.page';
import { S28003Page } from './s28003/s28003.page';
import { S28004Page } from './s28004/s28004.page';
import { S28005Page } from './s28005/s28005.page';
import { S28006Page } from './s28006/s28006.page';
import { S28007Page } from './s28007/s28007.page';
import { S28008Page } from './s28008/s28008.page';
import { S28009Page } from './s28009/s28009.page';
import { S28010Page } from './s28010/s28010.page';
import { S28011Page } from './s28011/s28011.page';
import { S28012Page } from './s28012/s28012.page';
import { S28013Page } from './s28013/s28013.page';
import { S28014Page } from './s28014/s28014.page';
import { S28015Page } from './s28015/s28015.page';

@NgModule({
  declarations: [
    S28001Page,
    S28002Page,
    S28003Page,
    S28004Page,
    S28005Page,
    S28006Page,
    S28007Page,
    S28008Page,
    S28009Page,
    S28010Page,
    S28011Page,
    S28012Page,
    S28013Page,
    S28014Page,
    S28015Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NatureRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class NatureModule { }
