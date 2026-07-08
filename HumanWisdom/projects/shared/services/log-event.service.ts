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

  private lastAppliedUserId: string | null = null;
  private lastAppliedDomain: string | null = null;

  constructor(
    private analytics: AngularFireAnalytics,
    private deviceService: DeviceDetectorService
  ) { }

  logEvent(eventname: string, module = false, screenNo: any = 0) {
    this.setUserEngagementIdentity();
    let name = localStorage.getItem('name') ? localStorage.getItem('name') : 'Guest User';
    let device_info: any = this.deviceService.getDeviceInfo()
    const isMobile = this.deviceService.isMobile();
    let deviceInfo = localStorage.getItem('fromapp');
    const isDesktopDevice = this.deviceService.isDesktop();
    eventname = SharedService.getprogramName() + '_' + eventname.replace("-","_").toString();
    eventname= eventname.substring(0,36);
    let eventName = (!deviceInfo || deviceInfo !== 'T') && this.isBrowser(device_info?.browser) ? eventname + '_' + 'Web' : eventname + '_' + 'App';
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
        const userId = JSON.parse(localStorage.getItem("userId"));
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

  /**
   * Sends the user identity + email domain to Google Analytics (GA4 via Firebase)
   * so an external dashboard can query active users / engagement by `email_domain`.
   *
   * Called globally on every logEvent. When no args are passed the values are
   * pulled from localStorage (userId + email, which login already persists), so
   * this stays in sync across reloads/sessions. GA is only hit when a value
   * actually changes.
   */
  setUserEngagementIdentity(userId?: string | number, email?: string) {
    const id = userId != null ? String(userId) : this.getStoredUserId();
    const domain = this.emailDomainFromAddress(email || localStorage.getItem('email') || '');

    if (id && id !== this.lastAppliedUserId) {
      this.analytics.setUserId(id);
      this.lastAppliedUserId = id;
    }
    if (domain && domain !== this.lastAppliedDomain) {
      this.analytics.setUserProperties({ email_domain: domain });
      this.lastAppliedDomain = domain;
    }
  }

  private getStoredUserId(): string {
    if (localStorage.getItem('isloggedin') !== 'T') {
      return '';
    }
    const raw = localStorage.getItem('userId');
    if (!raw) {
      return '';
    }
    try {
      return String(JSON.parse(raw));
    } catch {
      return raw;
    }
  }

  emailDomainFromAddress(email: string): string {
    const normalized = (email || '').replace(/"/g, '').trim().toLowerCase();
    const at = normalized.lastIndexOf('@');
    return at > 0 ? normalized.substring(at + 1) : '';
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
