import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumLandingPageRoutingModule } from './forum-landing-routing.module';

import { ForumLandingPage } from './forum-landing.page';

//import {SharedModule} from '../../shared/shared.module'
import {SharedModule} from '../../../../../shared/shared.module'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumLandingPageRoutingModule,
    SharedModule
  ],
  declarations: [ForumLandingPage]
})
export class ForumLandingPageModule {}
