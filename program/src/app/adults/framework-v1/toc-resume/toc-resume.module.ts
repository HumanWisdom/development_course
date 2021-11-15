import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TocResumePageRoutingModule } from './toc-resume-routing.module';

import { TocResumePage } from './toc-resume.page';

import {SharedModule} from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TocResumePageRoutingModule,
    SharedModule
  ],
  declarations: [TocResumePage]
})
export class TocResumePageModule {}
