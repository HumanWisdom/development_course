import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
    providedIn: 'root'
})
export class LogEventService {

    constructor(
        private analytics: AngularFireAnalytics,
        private deviceService: DeviceDetectorService
    ) { }

    logEvent(eventname: string, param:string, val: string) {
        let userinfo;
        let obj = {};
        let name = localStorage.getItem('name') ? localStorage.getItem('name') : 'Guest User'
        let device_info: any = this.deviceService.getDeviceInfo()
        userinfo = name + ', ' + device_info.os + ', ' + device_info.browser + ', ' + device_info.device
        val = val + ', ' + userinfo
        obj[param] = val;
        this.analytics.logEvent(eventname, obj);
    }
}