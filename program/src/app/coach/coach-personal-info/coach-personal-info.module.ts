import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CoachPersonalInfoPage } from './coach-personal-info.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule                   
  ],
  declarations: [CoachPersonalInfoPage]
})
export class CoachPersonalInfoPageModule {}
