import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalS01PageRoutingModule } from './journal-s01-routing.module';

import { JournalS01Page } from './journal-s01.page';

import {SharedModule} from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalS01PageRoutingModule,
    SharedModule
  ],
  declarations: [JournalS01Page]
})
export class JournalS01PageModule {}
