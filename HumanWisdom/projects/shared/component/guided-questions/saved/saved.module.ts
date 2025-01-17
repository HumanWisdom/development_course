import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SavedPageRoutingModule } from './saved-routing.module';
import { SharedModule } from '../../../shared.module';
import { savedPage } from './saved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedPageRoutingModule,
    SharedModule
  ],
  declarations: [savedPage]
})
export class SavedPageModule {}
