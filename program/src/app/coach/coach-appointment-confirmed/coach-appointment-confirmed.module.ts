import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachAppointmentConfirmedPage } from './coach-appointment-confirmed.page';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CoachAppointmentConfirmedPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoachAppointmentConfirmedPage],
  exports: [RouterModule]
})

export class CoachAppointmentConfirmedPageModule {}
