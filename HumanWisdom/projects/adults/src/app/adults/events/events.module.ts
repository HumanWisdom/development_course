import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';

import { EventsRoutingModule } from './events-routing.module';

import { E01Page } from './e01/e01.page'; 
@NgModule({
  declarations: [
    E01Page,
  ],
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
