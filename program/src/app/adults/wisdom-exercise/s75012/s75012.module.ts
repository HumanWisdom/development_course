import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75012PageRoutingModule } from './s75012-routing.module';

import { S75012Page } from './s75012.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75012PageRoutingModule,
    SharedModule
  ],
  declarations: [S75012Page]
})
export class S75012PageModule {}
