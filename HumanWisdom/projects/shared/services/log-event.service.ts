import { AngularFireAnalytics } from '@angular/fire/analytics';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
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

  logEvent(eventname: string, module = false, screenNo: any = 0) {
    let name = localStorage.getItem('name') ? localStorage.getItem('name') : 'Guest User';
    let device_info: any = this.deviceService.getDeviceInfo()
    const isMobile = this.deviceService.isMobile();
    let deviceInfo = localStorage.getItem('fromapp');
    const isDesktopDevice = this.deviceService.isDesktop();
    let eventName = (!deviceInfo || deviceInfo !== 'T') && this.isBrowser(device_info?.browser) ? eventname + '_' + 'Web' : eventname + '_' + 'App';
    eventName = SharedService.getprogramName() + '_' + eventName.replace("-","_").toString();
    // let eventName = isMobile && !isDesktopDevice ? eventname + '_' + device_info.os : eventname + '_' + 'Web';
    // gtag('event', eventname + '_' + device_info.os, { UserName: name })
    // gtag('event', eventname + '_' + device_info.os, { DeviceOS: device_info.os })
    // gtag('event', eventname + '_' + device_info.os, { DeviceBrowser: device_info.browser })
    this.analytics.logEvent(eventName, { UserName: name });
    this.analytics.logEvent(eventName, { IsApp: deviceInfo });
    this.analytics.logEvent(eventName, { DeviceOS: device_info.os });
    this.analytics.logEvent(eventName, { device: device_info.device });
    this.analytics.logEvent(eventName, { userAgent: device_info.userAgent });
    this.analytics.logEvent(eventName, { DeviceBrowser: device_info.browser });
    if (module) {
      this.analytics.logEvent(eventName, { ScreenNo: screenNo });
    }
    /*  if (typeof fbq === 'undefined'){}
     else{
       fbq('track', eventName);
     }
*/
    setTimeout(() => {
      const accessObj: any = window;
      if (localStorage.getItem('isloggedin') == 'T') {
        var userId = JSON.parse(localStorage.getItem("userId"));
        if (userId != null) {
          accessObj?.Moengage.update_unique_user_id(userId.toString());
        }
      }

      if (module) {
        (accessObj)?.Moengage.track_event(eventName, {
          "UserName": name, // string value
          "ScreenNo": screenNo,
          "deviceOS": device_info.os, // numeric value
          "DeviceBrowser": device_info.browser, // numeric value
          "Date": new Date(), // datetime value. Example value represents 31 January, 2017.
        });
      } else {
        (accessObj)?.Moengage.track_event(eventName, {
          "UserName": name, // string value
          "deviceOS": device_info.os, // numeric value
          "DeviceBrowser": device_info.browser, // numeric value
          "Date": new Date(), // datetime value. Example value represents 31 January, 2017.
        });
      }

    }, 5000);

  }

  isBrowser(browser) {
    let result = false;
    switch (browser) {
      case 'Chrome':
        result = true;
        break
      case 'Firefox':
        result = true;
        break
      case 'Safari':
        result = true;
        break
      case 'Opera':
        result = true;
        break
      case 'IE':
        result = true;
        break
      case 'MS-Edge':
        result = true;
        break
      case 'MS-Edge-Chromium':
        result = true;
        break
      case 'FB-Messanger':
        result = true;
        break
      case 'Samsung':
        result = true;
        break
      case 'UC-Browser':
        result = true;
        break
    }
    return result;
  }
}
