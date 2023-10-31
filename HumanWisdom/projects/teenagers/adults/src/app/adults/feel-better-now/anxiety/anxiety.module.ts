import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnxietyPageRoutingModule } from './anxiety-routing.module';

import { AnxietyPage } from './anxiety.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AnxietyPageRoutingModule
  ],
  declarations: [AnxietyPage]
})
export class AnxietyPageModule {}
