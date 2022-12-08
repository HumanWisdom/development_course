import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreePlantationReportPageRoutingModule } from './tree-plantation-report-routing.module';

import { TreePlantationReportPage } from './tree-plantation-report.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreePlantationReportPageRoutingModule,
    SharedModule
  ],
  declarations: [TreePlantationReportPage]
})
export class TreePlantationReportPageModule {}
