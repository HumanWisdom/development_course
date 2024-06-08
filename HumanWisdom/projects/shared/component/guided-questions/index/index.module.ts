import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../../shared.module';
import { IndexPage } from './index.page';
import { IndexPageRoutingModule } from './index-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    IndexPageRoutingModule
  ],
  providers:[
    
  ],
  exports:[IndexPage],
  declarations: [IndexPage]
})
export class IndexPageModule {}
