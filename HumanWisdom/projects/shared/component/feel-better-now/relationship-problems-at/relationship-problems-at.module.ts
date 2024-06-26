import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared.module';

import { RelationshipProblemsAtPageRoutingModule } from './relationship-problems-at-routing.module';

import { RelationshipProblemsAtPage } from './relationship-problems-at.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RelationshipProblemsAtPageRoutingModule
  ],
  declarations: [RelationshipProblemsAtPage]
})
export class RelationshipProblemsAtPageModule {}
