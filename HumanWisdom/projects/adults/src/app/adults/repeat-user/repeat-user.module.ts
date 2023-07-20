import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepeatUserPageRoutingModule } from './repeat-user-routing.module';

import { RepeatUserPage } from './repeat-user.page';

import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RepeatUserPageRoutingModule
  ],
  declarations: [RepeatUserPage]
})
export class RepeatUserPageModule {}
