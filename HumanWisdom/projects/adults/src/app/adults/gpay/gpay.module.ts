import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { GpayPage } from "./gpay.page";
import { GooglePayButtonModule } from "@google-pay/button-angular";
import { NgModule } from "@angular/core";
import { GpayRoutingModule } from "./gpay-routing.module";
import { UPIHandlerService } from "../upihandler.service";
import { Deeplinks } from "@ionic-native/deeplinks/ngx";
import { LogEventService } from "../../../../../shared/services/log-event.service";
@NgModule({
    imports: [ FormsModule, GooglePayButtonModule,
  GpayRoutingModule,
    ],
    providers:[UPIHandlerService,Deeplinks,LogEventService],
    declarations: [GpayPage]
  })
  export class GpayModule {}