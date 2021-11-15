import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {SharedModule} from '../../shared/shared.module'

import { IonicModule } from '@ionic/angular';

import { LandingS2PageRoutingModule } from './landing-s2-routing.module';

import { LandingS2Page } from './landing-s2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    LandingS2PageRoutingModule
  ],
  declarations: [LandingS2Page]
})
export class LandingS2PageModule {}
