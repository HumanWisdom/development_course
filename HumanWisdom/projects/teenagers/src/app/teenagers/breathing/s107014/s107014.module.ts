import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S107014PageRoutingModule } from './s107014-routing.module';

import { S107014Page } from './s107014.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S107014PageRoutingModule
  ],
  declarations: [S107014Page]
})
export class S107014PageModule {}
