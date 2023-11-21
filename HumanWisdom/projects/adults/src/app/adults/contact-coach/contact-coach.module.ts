import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactCoachPageRoutingModule } from './contact-coach-routing.module';

import { ContactCoachPage } from './contact-coach.page';

import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactCoachPageRoutingModule,
    SharedModule
  ],
  declarations: [ContactCoachPage],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ContactCoachPage,
    multi: true,
  }]
})
export class ContactCoachPageModule {}
