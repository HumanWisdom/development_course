import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreesistersPageRoutingModule } from './treesisters-routing.module';

import { TreesistersPage } from './treesisters.page';

import {SharedModule}from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreesistersPageRoutingModule,
    SharedModule
  ],
  declarations: [TreesistersPage]
})
export class TreesistersPageModule {}
