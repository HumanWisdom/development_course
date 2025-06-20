import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentHubPageRoutingModule } from './parent-hub-routing.module';

import { ParentHubPage } from './parent-hub.page';
import { SharedModule } from '../../../../shared/shared.module';
import { NgxCircularPlayerModule } from 'ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentHubPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [ParentHubPage]
})
export class ParentHubPageModule {}
