import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnderstandYourselfPageRoutingModule } from './understand-yourself-routing.module';

import { UnderstandYourselfPage } from './understand-yourself.page';

import { SharedModule } from '../../../../../../shared/shared.module';
import { NgxCircularPlayerModule } from 'ngx-circular-player';
import { NgxCaptureComponent } from 'ngx-capture';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnderstandYourselfPageRoutingModule,
    SharedModule,
    NgxCircularPlayerModule,
  ],
  declarations: [UnderstandYourselfPage]
})
export class UnderstandYourselfPageModule {}
