import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworksRoutingModule } from './frameworks-routing.module';
import { AffiliateS01Component } from './affiliate-s01/affiliate-s01.component';

import {SharedModule} from '../shared/shared.module';
import { AffiliateS01AComponent } from './affiliate-s01-a/affiliate-s01-a.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';



@NgModule({
  declarations: [
    AffiliateS01Component,
    AffiliateS01AComponent
  ],
  imports: [
    CommonModule,
    FrameworksRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrameworksModule { }
