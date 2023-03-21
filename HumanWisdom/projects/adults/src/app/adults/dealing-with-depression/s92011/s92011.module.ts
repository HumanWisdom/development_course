import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92011PageRoutingModule } from './s92011-routing.module';

import { S92011Page } from './s92011.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92011PageRoutingModule
  ],
  declarations: [S92011Page]
})
export class S92011PageModule {}
