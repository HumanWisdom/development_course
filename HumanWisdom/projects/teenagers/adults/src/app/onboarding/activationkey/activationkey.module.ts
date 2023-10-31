import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivationkeyPageRoutingModule } from './activationkey-routing.module';

import { ActivationkeyPage } from './activationkey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivationkeyPageRoutingModule
  ],
  declarations: [ActivationkeyPage]
})
export class ActivationkeyPageModule {}
