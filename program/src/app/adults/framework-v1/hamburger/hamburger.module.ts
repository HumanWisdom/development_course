import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HamburgerPageRoutingModule } from './hamburger-routing.module';

import { HamburgerPage } from './hamburger.page';

import {SharedModule} from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HamburgerPageRoutingModule,
    SharedModule
  ],
  declarations: [HamburgerPage]
})
export class HamburgerPageModule {}
