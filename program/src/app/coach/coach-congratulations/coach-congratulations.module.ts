import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachCongratulationsPageRoutingModule } from './coach-congratulations-routing.module';

import { CoachCongratulationsPage } from './coach-congratulations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachCongratulationsPageRoutingModule
  ],
  declarations: [CoachCongratulationsPage]
})
export class CoachCongratulationsPageModule {}
