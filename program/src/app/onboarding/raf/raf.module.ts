import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RafPageRoutingModule } from './raf-routing.module';

import { RafPage } from './raf.page';

import {SharedModule} from '../../adults/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RafPageRoutingModule,
    SharedModule
  ],
  declarations: [RafPage]
})
export class RafPageModule {}
