import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { DeviceDetectorService } from 'ngx-device-detector';

declare const gtag: Function;

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
    }
}