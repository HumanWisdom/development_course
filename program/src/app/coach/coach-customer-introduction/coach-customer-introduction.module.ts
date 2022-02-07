import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachCustomerIntroductionPage } from './coach-customer-introduction.page';

import { SharedModule } from 'src/app/adults/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CoachCustomerIntroductionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoachCustomerIntroductionPage],
  exports:[RouterModule]
})
export class CoachCustomerIntroductionPageModule {}
