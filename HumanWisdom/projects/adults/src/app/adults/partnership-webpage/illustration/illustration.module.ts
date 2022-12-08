import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IllustrationPageRoutingModule } from './illustration-routing.module';

import { IllustrationPage } from './illustration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IllustrationPageRoutingModule
  ],
  declarations: [IllustrationPage]
})
export class IllustrationPageModule {}
