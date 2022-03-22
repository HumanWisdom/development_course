import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalisedForYouPageRoutingModule } from './personalised-for-you-routing.module';

import { PersonalisedForYouPage } from './personalised-for-you.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalisedForYouPageRoutingModule
  ],
  declarations: [PersonalisedForYouPage]
})
export class PersonalisedForYouPageModule {}
