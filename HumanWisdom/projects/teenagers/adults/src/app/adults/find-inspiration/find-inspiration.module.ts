import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../shared/shared.module';

import { FindInspirationPageRoutingModule } from './find-inspiration-routing.module';

import { FindInspirationPage } from './find-inspiration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FindInspirationPageRoutingModule
  ],
  declarations: [FindInspirationPage]
})
export class FindInspirationPageModule {}
