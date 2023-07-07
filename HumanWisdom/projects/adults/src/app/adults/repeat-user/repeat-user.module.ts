import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepeatUserPageRoutingModule } from './repeat-user-routing.module';

import { RepeatUserPage } from './repeat-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepeatUserPageRoutingModule
  ],
  declarations: [RepeatUserPage]
})
export class RepeatUserPageModule {}
