import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared/shared.module'
import {AdultsService} from '../adults.service';

import { SolvingGlobalProblemsRoutingModule } from './solving-global-problems-routing.module';

import { S72001Page } from './s72001/s72001.page';
import { S72002Page } from './s72002/s72002.page';
import { S72003Page } from './s72003/s72003.page';
import { S72004Page } from './s72004/s72004.page';
import { S72005Page } from './s72005/s72005.page';

@NgModule({
  declarations: [
    S72001Page,
    S72002Page,
    S72003Page,
    S72004Page,   
    S72005Page,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SolvingGlobalProblemsRoutingModule
  ],
  providers:[
    AdultsService
  ]
})
export class SolvingGlobalProblemsModule { }
