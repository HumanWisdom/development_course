import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75013PageRoutingModule } from './s75013-routing.module';

import { S75013Page } from './s75013.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75013PageRoutingModule,
    SharedModule
  ],
  declarations: [S75013Page]
})
export class S75013PageModule {}
