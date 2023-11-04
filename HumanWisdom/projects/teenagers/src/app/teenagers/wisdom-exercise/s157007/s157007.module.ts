import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157007PageRoutingModule } from './s157007-routing.module';

import { S157007Page } from './s157007.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157007PageRoutingModule,
    SharedModule
  ],
  declarations: [S157007Page]
})
export class S157007PageModule {}
