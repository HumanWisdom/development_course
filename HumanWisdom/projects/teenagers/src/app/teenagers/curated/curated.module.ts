import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuratedRoutingModule } from './curated-routing.module';
import { CuratedRedirectComponent } from './curated-redirect/curated-redirect.component';


@NgModule({
  declarations: [
    CuratedRedirectComponent
  ],
  imports: [
    CommonModule,
    CuratedRoutingModule
  ]
})
export class CuratedModule { }

