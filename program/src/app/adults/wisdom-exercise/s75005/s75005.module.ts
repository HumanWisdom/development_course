import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75005PageRoutingModule } from './s75005-routing.module';

import { S75005Page } from './s75005.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75005PageRoutingModule,
    SharedModule
  ],
  declarations: [S75005Page]
})
export class S75005PageModule {}
