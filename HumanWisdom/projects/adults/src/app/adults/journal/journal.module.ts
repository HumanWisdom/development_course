import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalPageRoutingModule } from './journal-routing.module';

import { JournalPage } from './journal.page';
import {SharedModule} from '../../../../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalPageRoutingModule,
    SharedModule
  ],
  declarations: [JournalPage]
})
export class JournalPageModule {}
