import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E01PageRoutingModule } from './e01-routing.module'; 

import { E01Page } from './e01.page'; 

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E01PageRoutingModule,
    SharedModule
  ],
  declarations: [E01Page]
})
export class E01PageModule {}
