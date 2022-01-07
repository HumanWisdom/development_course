import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToHomeScreenIosPageRoutingModule } from './add-to-home-screen-ios-routing.module';

import { AddToHomeScreenIosPage } from './add-to-home-screen-ios.page';

import {SharedModule}from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToHomeScreenIosPageRoutingModule,
    SharedModule
  ],
  declarations: [AddToHomeScreenIosPage]
})
export class AddToHomeScreenIosPageModule {}
