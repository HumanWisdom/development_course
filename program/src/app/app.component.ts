import { Component, HostListener } from '@angular/core';

import {
  Platform
} from '@angular/cdk/platform';
import { NavigationEnd, Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { LogEventService } from './log-event.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    localStorage.setItem('adult', 'F')
  }

  //static progress mapping
  mediaAudio = "https://d1tenzemoxuh75.cloudfront.net"
  mediaVideo = "https://d1tenzemoxuh75.cloudfront.net"

  public pageLoaded = false;

  constructor(
    private platform: Platform,
    private router: Router,
    private deviceService: DeviceDetectorService,
    private logeventService: LogEventService,
  ) {
    localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
    if (this.platform.ANDROID || this.platform.IOS) {
      localStorage.setItem('acceptcookie', 'T')
    }
    this.initializeApp();
    let device_info: any = this.deviceService.getDeviceInfo()
    delete device_info.userAgent
    delete device_info.orientation
    this.logeventService.logEvent('device_info', { details: JSON.stringify(device_info) })
  }

  initializeApp() {
    let remember = localStorage.getItem("remember")
    let first = localStorage.getItem("firsttime")
    if (remember === 'F' && first === 'T') {
      localStorage.clear()
      localStorage.setItem('guest', 'T');
      localStorage.setItem('personalised', 'T');
      localStorage.setItem('acceptcookie', 'T');
      this.router.navigate(['/adults/adult-dashboard'])
    }
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        setTimeout(() => {
          this.pageLoaded = true;
        }, 2000)
      }
    });
  }
}
