import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdultDashboardV1RoutingModule } from './adult-dashboard-v1-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdultDashboardPageRoutingModule } from '../adult-dashboard/adult-dashboard-routing.module';
import { AdultDashboardPage } from '../adult-dashboard/adult-dashboard.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AdultDashboardPageRoutingModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AdultDashboardPage]
})
export class AdultDashboardV1Module { }
