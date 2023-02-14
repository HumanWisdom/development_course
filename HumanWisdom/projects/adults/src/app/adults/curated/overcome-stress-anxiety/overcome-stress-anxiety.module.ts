import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvercomeStressAnxietyPageRoutingModule } from './overcome-stress-anxiety-routing.module';

import { OvercomeStressAnxietyPage } from './overcome-stress-anxiety.page';

import { SharedModule } from '../../../../../../shared/shared.module';

import { NgxCircularPlayerModule } from '../../../../../../ngx-circular-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvercomeStressAnxietyPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule
  ],
  declarations: [OvercomeStressAnxietyPage]
})
export class OvercomeStressAnxietyPageModule {}
