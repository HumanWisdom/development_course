import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157006PageRoutingModule } from './s157006-routing.module';

import { S157006Page } from './s157006.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157006PageRoutingModule,
    SharedModule
  ],
  declarations: [S157006Page]
})
export class S157006PageModule {}
