import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../../shared/shared.module';
import { JournalPageRoutingModule } from './journal-routing.module';
import { JournalPage } from './journal.page';



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
