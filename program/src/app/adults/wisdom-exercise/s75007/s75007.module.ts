import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75007PageRoutingModule } from './s75007-routing.module';

import { S75007Page } from './s75007.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75007PageRoutingModule,
    SharedModule
  ],
  declarations: [S75007Page]
})
export class S75007PageModule {}
