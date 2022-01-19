import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachService } from './services/coach.service';
import { CoachDataService } from './services/coach-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoachRoutingModule
  ],
  providers:[
    CoachService,
    CoachDataService
  ]
})
export class CoachModule { }
