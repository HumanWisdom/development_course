import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75009PageRoutingModule } from './s75009-routing.module';

import { S75009Page } from './s75009.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75009PageRoutingModule,
    SharedModule
  ],
  declarations: [S75009Page]
})
export class S75009PageModule {}
