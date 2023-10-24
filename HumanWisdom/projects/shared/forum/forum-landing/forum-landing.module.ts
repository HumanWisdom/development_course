import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumLandingPageRoutingModule } from './forum-landing-routing.module';

import { ForumLandingPage } from './forum-landing.page';
import { SharedModule } from '../../shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumLandingPageRoutingModule,
    SharedModule
  ],
  declarations: [ForumLandingPage],
  exports:[ForumLandingPage]
})
export class ForumLandingPageModule {}
