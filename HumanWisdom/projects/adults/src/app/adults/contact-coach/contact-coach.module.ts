import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactCoachPageRoutingModule } from './contact-coach-routing.module';

import { ContactCoachPage } from './contact-coach.page';

import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactCoachPageRoutingModule,
    SharedModule
  ],
  declarations: [ContactCoachPage]
})
export class ContactCoachPageModule {}
