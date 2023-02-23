import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeenagersService } from './teenagers/teenagers.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[TeenagersService,AdultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
