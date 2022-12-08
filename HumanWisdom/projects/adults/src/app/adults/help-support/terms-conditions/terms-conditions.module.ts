import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsConditionsPageRoutingModule } from './terms-conditions-routing.module';

import { TermsConditionsPage } from './terms-conditions.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsConditionsPageRoutingModule,
    SharedModule
  ],
  declarations: [TermsConditionsPage]
})
export class TermsConditionsPageModule {}
