import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import {Deeplinks} from '@ionic-native/deeplinks/ngx'
import { LogEventService } from '../log-event.service';
@Injectable({
  providedIn: 'root'
})
export class UPIHandlerService {

  constructor(private platform:Platform,
    private deeplinks:Deeplinks,
    private logEvent:LogEventService) { }

openUPIApp(upiId:string){
if(this.platform.is('ios')){
  this.logEvent.logEvent('ios API OPENED');
  window.open('upi://pay?pa=9828173308@okbizaxis&pn=Kundan%20Steel%20And%20Hardware&am=1.00&tr=20230201&cu=INR&url=http://staging.humanwisdom.me/','_system')
}else if(this.platform.is('android')){
  this.logEvent.logEvent('Androidplatformopened');
  this.deeplinks.route('upi://pay?pa=9828173308@okbizaxis&pn=Kundan%20Steel%20And%20Hardware&am=1.00&tr=20230201&cu=INR&url=http://staging.humanwisdom.me/'
  ).subscribe((match)=>{
    console.log('Successfully opened UPI app',match);
    this.recordPaymentResponse(match.$args);
  },(nomatch)=>{
  this.logEvent.logEvent('Failed to open app'+nomatch);

    console.log('Failed to open app:',nomatch);
  });
}else{
  this.logEvent.logEvent('UPI payment is not supported');
  console.error('UPI payment is not supported');
}
}

recordPaymentResponse(response:any){
  console.log('Payment response',response);
  this.logEvent.logEvent('response' + response);
}
  }
