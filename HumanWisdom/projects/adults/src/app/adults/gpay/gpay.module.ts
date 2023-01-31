import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { GpayPage } from "./gpay.page";
import { GooglePayButtonModule } from "@google-pay/button-angular";
import { NgModule } from "@angular/core";
import { GpayRoutingModule } from "./gpay-routing.module";
@NgModule({
    imports: [ FormsModule, GooglePayButtonModule,
  GpayRoutingModule,
    ],
    declarations: [GpayPage]
  })
  export class GpayModule {}