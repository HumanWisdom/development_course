import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPopularItemsPageRoutingModule } from './search-popular-items-routing.module';

import { SearchPopularItemsPage } from './search-popular-items.page';

import {SharedModule} from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPopularItemsPageRoutingModule,
    SharedModule
  ],
  declarations: [SearchPopularItemsPage]
})
export class SearchPopularItemsPageModule {}
