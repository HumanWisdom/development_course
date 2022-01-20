import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CoachPersonalInfoPage } from './coach-personal-info.page';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RouterModule, Routes } from '@angular/router';


const app: Routes = [
  {
      path: '',
      component: CoachPersonalInfoPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NgMultiSelectDropDownModule,
    RouterModule.forChild(app)
  ],
  declarations: [CoachPersonalInfoPage],
  exports: [RouterModule]
})
export class CoachPersonalInfoPageModule {}
