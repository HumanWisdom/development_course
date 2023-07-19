import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelationshipProblemsPageRoutingModule } from './relationship-problems-routing.module';

import { RelationshipProblemsPage } from './relationship-problems.page';

import { SharedModule } from '../../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RelationshipProblemsPageRoutingModule
  ],
  declarations: [RelationshipProblemsPage]
})
export class RelationshipProblemsPageModule {}
