import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92005PageRoutingModule } from './s92005-routing.module';

import { S92005Page } from './s92005.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92005PageRoutingModule
  ],
  declarations: [S92005Page]
})
export class S92005PageModule {}
