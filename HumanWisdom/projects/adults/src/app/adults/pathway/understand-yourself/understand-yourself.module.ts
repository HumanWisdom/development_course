import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../../../../shared/shared.module';

import { UnderstandYourselfPageRoutingModule } from './understand-yourself-routing.module';

import { UnderstandYourselfPage } from './understand-yourself.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    UnderstandYourselfPageRoutingModule
  ],
  declarations: [UnderstandYourselfPage]
})
export class UnderstandYourselfPageModule {}
