import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { StartHereRoutingModule } from './start-here-routing.module';
import { S78001Page } from './s78001/s78001.page'; 


@NgModule({
  declarations: [
      S78001Page,
  ],
  imports: [
    CommonModule,
    IonicModule,
    StartHereRoutingModule
  ]
})
export class StartHereModule { }
