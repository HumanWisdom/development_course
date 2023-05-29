import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SharedModule } from '../../../../../../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { GuidedQuestionsRoutingModule } from '../guided-questions-routing.module';
import { IndexPage } from './index.page';
import { IndexPageRoutingModule } from './index-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    IndexPageRoutingModule
  ],
  providers:[
    
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
