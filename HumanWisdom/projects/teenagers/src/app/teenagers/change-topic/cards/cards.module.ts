import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../../../shared/shared.module';
import { CardsPageRoutingModule } from './cards-routing.module';
import { CardsPage } from './cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CardsPageRoutingModule
  ],
  declarations: [CardsPage]
})
export class CardsPageModule {}
