import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafeConfirmationPageRoutingModule } from './cafe-confirmation-routing.module';

import { CafeConfirmationPage } from './cafe-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CafeConfirmationPageRoutingModule
  ],
  declarations: [CafeConfirmationPage]
})
export class CafeConfirmationPageModule {}
