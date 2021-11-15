import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenProgressBarPageRoutingModule } from './screen-progress-bar-routing.module';

import { ScreenProgressBarPage } from './screen-progress-bar.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenProgressBarPageRoutingModule,
    SharedModule
  ],
  declarations: [ScreenProgressBarPage]
})
export class ScreenProgressBarPageModule {}
