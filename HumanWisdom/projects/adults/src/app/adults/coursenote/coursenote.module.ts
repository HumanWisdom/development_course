import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursenotePageRoutingModule } from './coursenote-routing.module';

import { CoursenotePage } from './coursenote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursenotePageRoutingModule
  ],
  declarations: [CoursenotePage]
})
export class CoursenotePageModule {}
