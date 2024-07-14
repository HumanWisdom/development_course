import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowCanIA06AtPageRoutingModule } from './how-can-i-a06-at-routing.module';

import { HowCanIA06AtPage } from './how-can-i-a06-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowCanIA06AtPageRoutingModule
  ],
  declarations: [HowCanIA06AtPage]
})
export class HowCanIA06AtPageModule {}
