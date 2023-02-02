import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeenagersRoutingModule } from './teenagers-routing.module';
import { TeenagersService } from './teenagers.service';
import { HttpClientModule } from '@angular/common/http';
import { AdultsService } from '../../../../adults/src/app/adults/adults.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TeenagersRoutingModule,
    HttpClientModule
  ],
  providers:[TeenagersService,AdultsService]
})
export class TeenagersModule { }
