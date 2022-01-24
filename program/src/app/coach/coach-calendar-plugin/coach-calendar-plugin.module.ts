import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachCalendarPluginPage } from './coach-calendar-plugin.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CoachCalendarPluginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgbModule,
    NgMultiSelectDropDownModule,
    RouterModule.forChild(routes)
  ],
  exports: [CoachCalendarPluginPage, RouterModule],
  declarations: [CoachCalendarPluginPage]
})
export class CoachCalendarPluginPageModule {}
