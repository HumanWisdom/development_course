import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78014PageRoutingModule } from './s78014-routing.module';

import { S78014Page } from './s78014.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78014PageRoutingModule
  ],
  declarations: [S78014Page]
})
export class S78014PageModule {}
