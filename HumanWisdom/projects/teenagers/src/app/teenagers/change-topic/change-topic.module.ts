import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeTopicPageRoutingModule } from './change-topic-routing.module';

import { ChangeTopicPage } from './change-topic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeTopicPageRoutingModule
  ],
  declarations: [ChangeTopicPage]
})
export class ChangeTopicPageModule {}
