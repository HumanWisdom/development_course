import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S78011PageRoutingModule } from './s78011-routing.module';

import { S78011Page } from './s78011.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S78011PageRoutingModule
  ],
  declarations: [S78011Page]
})
export class S78011PageModule {}
