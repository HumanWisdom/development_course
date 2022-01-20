import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CoachProfessionalInfoPage } from './coach-professional-info.page';
import { RouterModule, Routes } from '@angular/router';


const app: Routes = [
  {
      path: '',
      component: CoachProfessionalInfoPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(app)
  ],
  declarations: [CoachProfessionalInfoPage],
  exports:[RouterModule]
})
export class CoachProfessionalInfoPageModule {}
