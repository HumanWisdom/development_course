import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S158116p1PageRoutingModule } from './s158116p1-routing.module';

import { S158116p1Page } from './s158116p1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S158116p1PageRoutingModule
  ],
  declarations: [S158116p1Page]
})
export class S158116p1PageModule {}
