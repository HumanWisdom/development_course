import { AngularFireAnalytics } from '@angular/fire/analytics';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Injectable } from '@angular/core';
declare const gtag: Function;
declare const fbq;
@Injectable({
    providedIn: 'root'
})
export class LogEventService {

    constructor(
        private analytics: AngularFireAnalytics,
        private deviceService: DeviceDetectorService
    ) { }

    logEvent(eventname: string) {
        let name = localStorage.getItem('name') ? localStorage.getItem('name') : 'Guest User'
        let device_info: any = this.deviceService.getDeviceInfo()
        gtag('event', eventname, { UserName: name })
        gtag('event', eventname, { DeviceOS: device_info.os })
        gtag('event', eventname, { DeviceBrowser: device_info.browser })
        this.analytics.logEvent(eventname, { UserName: name });
        this.analytics.logEvent(eventname, { DeviceOS: device_info.os });
        this.analytics.logEvent(eventname, { DeviceBrowser: device_info.browser });
        if (typeof fbq === 'undefined'){}
        else{ 
                fbq('track', eventname);
        }

         setTimeout(() => {
            const accessObj:any = window;
            if(localStorage.getItem('isloggedin') == 'T'){
                var userId=JSON.parse(localStorage.getItem("userId"));
                if(userId != null) {
                    debugger;
                    accessObj?.Moengage.update_unique_user_id(userId.toString());
                }
             }
            (accessObj)?.Moengage.track_event(eventname, {
                "UserName": name, // string value
                "deviceOS": device_info.os, // numeric value
                "DeviceBrowser":device_info.browser, // numeric value
                "Date": new Date(), // datetime value. Example value represents 31 January, 2017.
                });
         }, 5000);
        
    }
}