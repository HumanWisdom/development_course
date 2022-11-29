import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S75006PageRoutingModule } from './s75006-routing.module';

import { S75006Page } from './s75006.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S75006PageRoutingModule,
    SharedModule
  ],
  declarations: [S75006Page]
})
export class S75006PageModule {}
