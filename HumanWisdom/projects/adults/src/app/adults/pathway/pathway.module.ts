import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';

import { PathwayRoutingModule } from './pathway-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PathwayRoutingModule
  ]
})
export class PathwayModule { }
