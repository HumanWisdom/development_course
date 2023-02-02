import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import {Deeplinks} from '@ionic-native/deeplinks/ngx'
@Injectable({
  providedIn: 'root'
})
export class UPIHandlerService {

  constructor(private platform:Platform,
    private deeplinks:Deeplinks) { }

openUPIApp(upiId:string){
if(this.platform.is('ios')){
  window.open('upi://pay?pa=${upiId}&pn=Kundan%20Steel%20And%20Hardware&am=1.00&cu=INR&url=http://staging.humanwisdom.me/','_system')
}else if(this.platform.is('android')){
  this.deeplinks.route({
    'upi://pay':{
      pa:upiId,
      pn:'KUNDAN STEEL AND HARDWARE',
      am:'1.00',
      cu:'INR',
      tr:'tr20230102',
      url:'http://staging.humanwisdom.me/'
    }
  }).subscribe((match)=>{
    console.log('Successfully opened UPI app',match);
    this.recordPaymentResponse(match.$args);
  },(nomatch)=>{
    console.log('Failed to open app:',nomatch);
  });
}else{
  console.error('UPI payment is not supported');
}
}

recordPaymentResponse(response:any){
  console.log('Payment response',response);
}
  }
