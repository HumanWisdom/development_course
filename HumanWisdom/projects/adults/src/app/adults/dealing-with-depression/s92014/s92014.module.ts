import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S92014PageRoutingModule } from './s92014-routing.module';

import { S92014Page } from './s92014.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S92014PageRoutingModule
  ],
  declarations: [S92014Page]
})
export class S92014PageModule {}
