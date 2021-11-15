import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkV1RoutingModule } from './framework-v1-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FrameworkV1RoutingModule
  ]
})
export class FrameworkV1Module { }
