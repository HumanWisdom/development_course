import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LonelinessPageRoutingModule } from './loneliness-routing.module';

import { LonelinessPage } from './loneliness.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LonelinessPageRoutingModule
  ],
  declarations: [LonelinessPage]
})
export class LonelinessPageModule {}
