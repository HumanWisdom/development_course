import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngerPageRoutingModule } from './anger-routing.module';

import { AngerPage } from './anger.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AngerPageRoutingModule
  ],
  declarations: [AngerPage]
})
export class AngerPageModule {}
