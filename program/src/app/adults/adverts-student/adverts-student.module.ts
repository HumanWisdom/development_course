import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsStudentPageRoutingModule } from './adverts-student-routing.module';

import { AdvertsStudentPage } from './adverts-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertsStudentPageRoutingModule
  ],
  declarations: [AdvertsStudentPage]
})
export class AdvertsStudentPageModule {}
