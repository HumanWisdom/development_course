import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S157014PageRoutingModule } from './s157014-routing.module';

import { S157014Page } from './s157014.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S157014PageRoutingModule,
    SharedModule
  ],
  declarations: [S157014Page]
})
export class S157014PageModule {}
