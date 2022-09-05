import { Component, HostListener } from '@angular/core';

import {
  Platform
} from '@angular/cdk/platform';
import { NavigationEnd, Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
    private statusBar: StatusBar,
    private router: Router
  ) {
    localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
    if (this.platform.ANDROID || this.platform.IOS) {
      localStorage.setItem('acceptcookie', 'T')
    }
    this.initializeApp();
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
