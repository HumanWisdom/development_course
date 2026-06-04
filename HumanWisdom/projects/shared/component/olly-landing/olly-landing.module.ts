import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OllyLandingRoutingModule } from './olly-landing-routing.module';

import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OllyLandingRoutingModule,
    SharedModule
  ]
})
export class OllyLandingModule {}
