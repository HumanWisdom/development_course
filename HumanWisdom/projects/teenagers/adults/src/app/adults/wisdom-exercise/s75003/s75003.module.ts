import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75003PageRoutingModule } from './s75003-routing.module';

import { S75003Page } from './s75003.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75003PageRoutingModule,
    SharedModule
  ],
  declarations: [S75003Page]
})
export class S75003PageModule {}
