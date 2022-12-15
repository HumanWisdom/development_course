import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75008PageRoutingModule } from './s75008-routing.module';

import { S75008Page } from './s75008.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75008PageRoutingModule,
    SharedModule
  ],
  declarations: [S75008Page]
})
export class S75008PageModule {}
