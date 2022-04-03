import { AdultDashboardV1Component } from './adult-dashboard-v1.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdultDashboardV1RoutingModule } from './adult-dashboard-v1-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AdultDashboardV1RoutingModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AdultDashboardV1Component]
})
export class AdultDashboardV1Module { }
