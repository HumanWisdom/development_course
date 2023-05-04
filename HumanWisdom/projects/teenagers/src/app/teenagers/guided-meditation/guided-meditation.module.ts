import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'

import { GuidedMeditationRoutingModule } from './guided-meditation-routing.module';

import { S110001Page } from './s110001/s110001.page';
import { S110002Page } from './s110002/s110002.page';
import { S110003Page } from './s110003/s110003.page';
import { S110004Page } from './s110004/s110004.page';
import { S110005Page } from './s110005/s110005.page';
import { S110006Page } from './s110006/s110006.page';
import { S110007Page } from './s110007/s110007.page';
import { S110008Page } from './s110008/s110008.page';
import { S110009Page } from './s110009/s110009.page';
import { S110010Page } from './s110010/s110010.page';
import { S110011Page } from './s110011/s110011.page';
import { TeenagersService } from '../teenagers.service';

@NgModule({
  declarations: [
    S110001Page,
    S110002Page,
    S110003Page,    
    S110004Page,    
    S110005Page,    
    S110006Page,    
    S110007Page,
    S110008Page,  
    S110009Page,  
    S110010Page,
    S110011Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    GuidedMeditationRoutingModule
  ],
  providers:[
    TeenagersService
  ]
})
export class GuidedMeditationModule { }
