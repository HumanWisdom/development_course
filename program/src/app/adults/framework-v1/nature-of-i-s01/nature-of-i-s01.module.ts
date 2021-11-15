import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NatureOfIS01PageRoutingModule } from './nature-of-i-s01-routing.module';

import { NatureOfIS01Page } from './nature-of-i-s01.page';

import {SharedModule} from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NatureOfIS01PageRoutingModule,
    SharedModule
  ],
  declarations: [NatureOfIS01Page]
})
export class NatureOfIS01PageModule {}
