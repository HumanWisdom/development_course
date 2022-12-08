import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../../../../../shared/shared.module'
import {AdultsService} from '../adults.service';

import { SolvingGlobalProblemsRoutingModule } from './solving-global-problems-routing.module';

import { S72001Page } from './s72001/s72001.page';
import { S72002Page } from './s72002/s72002.page';
import { S72003Page } from './s72003/s72003.page';
import { S72004Page } from './s72004/s72004.page';
import { S72005Page } from './s72005/s72005.page';
import { S72001p1Page } from './s72001p1/s72001p1.page';
import { S72002p1Page } from './s72002p1/s72002p1.page';
import { S72003p1Page } from './s72003p1/s72003p1.page';
import { S72004p1Page } from './s72004p1/s72004p1.page';
import { S72005p1Page } from './s72005p1/s72005p1.page';
@NgModule({
  declarations: [
    S72001Page,
    S72002Page,
    S72003Page,
    S72004Page,   
    S72005Page,
    S72001p1Page,
    S72002p1Page,
    S72003p1Page,
    S72004p1Page,
    S72005p1Page,
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
