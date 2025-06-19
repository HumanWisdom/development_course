import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentHubPageRoutingModule } from './parent-hub-routing.module';

import { ParentHubPage } from './parent-hub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentHubPageRoutingModule
  ],
  declarations: [ParentHubPage]
})
export class ParentHubPageModule {}
