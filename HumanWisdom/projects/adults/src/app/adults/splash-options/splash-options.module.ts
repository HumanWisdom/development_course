import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashOptionsPageRoutingModule } from './splash-options-routing.module';

import { SplashOptionsPage } from './splash-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashOptionsPageRoutingModule
  ],
  declarations: [SplashOptionsPage]
})
export class SplashOptionsPageModule {}
