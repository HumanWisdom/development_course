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

    logEvent(eventname: string, param: string, val: string) {
        let obj = {};
        let name = localStorage.getItem('name') ? localStorage.getItem('name') : 'Guest User'
        let device_info: any = this.deviceService.getDeviceInfo()
        this.analytics.logEvent(eventname, { username: name });
        this.analytics.logEvent(eventname, { deviceOS: device_info.os });
        this.analytics.logEvent(eventname, { deviceBrowser: device_info.browser });
        this.analytics.logEvent(eventname, { device: device_info.device });
        obj[param] = val;
        this.analytics.logEvent(eventname, obj);
    }
}