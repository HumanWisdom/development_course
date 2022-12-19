import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiveTheGiftOfWisdomPageRoutingModule } from './give-the-gift-of-wisdom-routing.module';

import { GiveTheGiftOfWisdomPage } from './give-the-gift-of-wisdom.page';

import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiveTheGiftOfWisdomPageRoutingModule,
    SharedModule
  ],
  declarations: [GiveTheGiftOfWisdomPage]
})
export class GiveTheGiftOfWisdomPageModule {}
