import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../../shared/shared.module'
import { AdultsService } from '../adults.service';

import { HowCanWisdomHelpRoutingModule } from './how-can-wisdom-help-routing.module';

import { S74001Page } from './s74001/s74001.page';
import { S74002Page } from './s74002/s74002.page';
import { S74003Page } from './s74003/s74003.page';
import { S74004Page } from './s74004/s74004.page';
import { S74005Page } from './s74005/s74005.page';
import { S74006Page } from './s74006/s74006.page';
import { S74007Page } from './s74007/s74007.page';
import { S74008Page } from './s74008/s74008.page';
import { S74009Page } from './s74009/s74009.page';
import { S74010Page } from './s74010/s74010.page';
import { S74011Page } from './s74011/s74011.page';
import { S74012Page } from './s74012/s74012.page';

@NgModule({
  declarations: [
    S74001Page,
    S74002Page,
    S74003Page,
    S74004Page,
    S74005Page,
    S74006Page,
    S74007Page,
    S74008Page,
    S74009Page,
    S74010Page,
    S74011Page,
    S74012Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HowCanWisdomHelpRoutingModule
  ],
  providers:[
    AdultsService
  ] 
})
export class HowCanWisdomHelpModule { }
