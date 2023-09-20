import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartYourFreeTrialPageRoutingModule } from './start-your-free-trial-routing.module';

import { StartYourFreeTrialPage } from './start-your-free-trial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartYourFreeTrialPageRoutingModule
  ],
  declarations: [StartYourFreeTrialPage]
})
export class StartYourFreeTrialPageModule {}
