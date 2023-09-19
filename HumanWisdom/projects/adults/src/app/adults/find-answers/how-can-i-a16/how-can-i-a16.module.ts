import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowCanIA16PageRoutingModule } from './how-can-i-a16-routing.module';

import { HowCanIA16Page } from './how-can-i-a16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowCanIA16PageRoutingModule
  ],
  declarations: [HowCanIA16Page]
})
export class HowCanIA16PageModule {}
