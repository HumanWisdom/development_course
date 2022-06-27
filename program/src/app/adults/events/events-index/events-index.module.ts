import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsIndexPageRoutingModule } from './events-index-routing.module';

import { EventsIndexPage } from './events-index.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsIndexPageRoutingModule,
    SharedModule
  ],
  declarations: [EventsIndexPage]
})
export class EventsIndexPageModule {}
