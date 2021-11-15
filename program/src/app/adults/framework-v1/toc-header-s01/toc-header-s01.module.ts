import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TocHeaderS01PageRoutingModule } from './toc-header-s01-routing.module';

import { TocHeaderS01Page } from './toc-header-s01.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TocHeaderS01PageRoutingModule,
    SharedModule
  ],
  declarations: [TocHeaderS01Page]
})
export class TocHeaderS01PageModule {}
