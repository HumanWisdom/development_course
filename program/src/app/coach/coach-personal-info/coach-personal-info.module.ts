import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CoachPersonalInfoPage } from './coach-personal-info.page';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NgMultiSelectDropDownModule
  ],
  declarations: [CoachPersonalInfoPage]
})
export class CoachPersonalInfoPageModule {}
