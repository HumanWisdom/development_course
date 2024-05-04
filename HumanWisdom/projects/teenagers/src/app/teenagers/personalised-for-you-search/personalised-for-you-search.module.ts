import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxCircularPlayerModule } from 'ngx-circular-player';
import { PersonalisedForYouSearchPageRoutingModule } from './personalised-for-you-search-routing.module';

import { PersonalisedForYouSearchPage } from './personalised-for-you-search.page';
import { SharedModule } from '../../../../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalisedForYouSearchPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [PersonalisedForYouSearchPage]
})
export class PersonalisedForYouSearchPageModule {}
