import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachService } from './services/coach.service';
import { CoachDataService } from './services/coach-data.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoachRoutingModule
  ],
  providers:[
    CoachService,
    CoachDataService
  ]
})
export class CoachModule { }
