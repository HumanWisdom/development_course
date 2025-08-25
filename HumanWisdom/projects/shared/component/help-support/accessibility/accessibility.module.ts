import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibilityRoutingModule } from './accessibility-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccessibilityComponent } from './accessibility.component';

import { SharedModule } from '../../../shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessibilityRoutingModule,
    SharedModule
  ],
  declarations: [AccessibilityComponent]
})
export class AccessibilityModule { }
