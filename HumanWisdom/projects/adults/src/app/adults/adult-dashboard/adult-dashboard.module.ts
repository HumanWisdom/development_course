import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../../shared/shared.module';
import { AdultDashboardPageRoutingModule } from './adult-dashboard-routing.module';
import { AdultDashboardPage } from './adult-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdultDashboardPageRoutingModule,
    SharedModule,
    PlatformModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AdultDashboardPage]
})
export class AdultDashboardPageModule { }
