import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachProfessionalInfoPageRoutingModule } from './coach-professional-info-routing.module';

import { CoachProfessionalInfoPage } from './coach-professional-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoachProfessionalInfoPageRoutingModule
  ],
  declarations: [CoachProfessionalInfoPage]
})
export class CoachProfessionalInfoPageModule {}
