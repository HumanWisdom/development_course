import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeenagersDashboardPageRoutingModule } from './teenagers-dashboard-routing.module';

import { TeenagersDashboardPage } from './teenagers-dashboard.page';

import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TeenagersDashboardPageRoutingModule
  ],
  declarations: [TeenagersDashboardPage]
})
export class TeenagersDashboardPageModule { }
