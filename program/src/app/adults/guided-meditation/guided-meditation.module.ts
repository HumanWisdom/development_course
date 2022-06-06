import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { GuidedMeditationRoutingModule } from './guided-meditation-routing.module';

import { S51000Page } from './s51000/s51000.page';
import { S51001Page } from './s51001/s51001.page';
import { S51002Page } from './s51002/s51002.page';
import { S51003Page } from './s51003/s51003.page';
import { S51004Page } from './s51004/s51004.page';
import { S51005Page } from './s51005/s51005.page';
import { S51006Page } from './s51006/s51006.page';
import { S51006p1Page } from './s51006p1/s51006p1.page';
import { S51006p2Page } from './s51006p2/s51006p2.page';
import { S51006p3Page } from './s51006p3/s51006p3.page';
import { S51006p4Page } from './s51006p4/s51006p4.page';
import { S51006p5Page } from './s51006p5/s51006p5.page';
import { S51006p6Page } from './s51006p6/s51006p6.page';
import { S51006p7Page } from './s51006p7/s51006p7.page';
import { S51012Page } from './s51012/s51012.page';
import { S51013Page } from './s51013/s51013.page';

@NgModule({
  declarations: [
    S51000Page,
    S51001Page,
    S51002Page,    
    S51003Page,    
    S51004Page,    
    S51005Page,    
    S51006Page,
    S51006p1Page,  
    S51006p2Page,  
    S51006p3Page,  
    S51006p4Page,  
    S51006p5Page,  
    S51006p6Page,  
    S51006p7Page,  
    S51012Page,
    S51013Page
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    GuidedMeditationRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class GuidedMeditationModule { }
