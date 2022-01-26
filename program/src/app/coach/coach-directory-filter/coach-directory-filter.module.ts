import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachDirectoryFilterPageRoutingModule } from './coach-directory-filter-routing.module';

import { CoachDirectoryFilterPage } from './coach-directory-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachDirectoryFilterPageRoutingModule
  ],
  declarations: [CoachDirectoryFilterPage]
})
export class CoachDirectoryFilterPageModule {}
