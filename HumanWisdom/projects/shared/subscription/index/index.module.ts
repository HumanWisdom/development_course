import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { SharedModule } from '../../../shared/shared.module';
import { LoginRegisterModalComponent } from  '../../../shared/component/login-register-modal/login-register-modal.component';
;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    IndexPageRoutingModule,
    LoginRegisterModalComponent
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
