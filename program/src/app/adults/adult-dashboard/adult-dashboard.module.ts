import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdultDashboardPageRoutingModule } from './adult-dashboard-routing.module';

import { AdultDashboardPage } from './adult-dashboard.page';
import {SharedModule} from '../shared/shared.module'
import {PlatformModule} from '@angular/cdk/platform';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AdultDashboardPageRoutingModule,
    SharedModule,
    PlatformModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AdultDashboardPage]
})
export class AdultDashboardPageModule {}
