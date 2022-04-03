import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreePlantingProgramPageRoutingModule } from './tree-planting-program-routing.module';

import { TreePlantingProgramPage } from './tree-planting-program.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreePlantingProgramPageRoutingModule
  ],
  declarations: [TreePlantingProgramPage]
})
export class TreePlantingProgramPageModule {}
