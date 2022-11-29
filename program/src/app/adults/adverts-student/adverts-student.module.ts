import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsStudentPageRoutingModule } from './adverts-student-routing.module';

import { AdvertsStudentPage } from './adverts-student.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertsStudentPageRoutingModule,
    SharedModule
  ],
  declarations: [AdvertsStudentPage]
})
export class AdvertsStudentPageModule {}
