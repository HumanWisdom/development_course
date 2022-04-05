import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardMainV1PageRoutingModule } from './dashboard-main-v1-routing.module';

import { DashboardMainV1Page } from './dashboard-main-v1.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardMainV1PageRoutingModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DashboardMainV1Page]
})
export class DashboardMainV1PageModule {}
