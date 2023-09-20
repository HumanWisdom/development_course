import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeTrialPageRoutingModule } from './free-trial-routing.module';

import { FreeTrialPage } from './free-trial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreeTrialPageRoutingModule
  ],
  declarations: [FreeTrialPage]
})
export class FreeTrialPageModule {}
