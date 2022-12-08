import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaveFulfillingRelationshipsPageRoutingModule } from './have-fulfilling-relationships-routing.module';

import { HaveFulfillingRelationshipsPage } from './have-fulfilling-relationships.page';

import { SharedModule } from '../../../../../../shared/shared.module';

import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaveFulfillingRelationshipsPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [HaveFulfillingRelationshipsPage]
})
export class HaveFulfillingRelationshipsPageModule {}
