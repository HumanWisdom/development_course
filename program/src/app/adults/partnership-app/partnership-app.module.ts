import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnershipAppRoutingModule } from './partnership-app-routing.module';

import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PartnershipAppRoutingModule,
    SharedModule
  ]
})
export class PartnershipAppModule { }
