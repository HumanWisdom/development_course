import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordLinkPageRoutingModule } from './password-link-routing.module';

import { PasswordLinkPage } from './password-link.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordLinkPageRoutingModule
  ],
  declarations: [PasswordLinkPage]
})
export class PasswordLinkPageModule {}
