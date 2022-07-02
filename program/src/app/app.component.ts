import { Component, HostListener } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationEnd, Router } from '@angular/router';
import {
  Platform
} from '@angular/cdk/platform';

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
   mediaAudio="https://d1tenzemoxuh75.cloudfront.net"
   mediaVideo="https://d1tenzemoxuh75.cloudfront.net"

  public pageLoaded = false;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private router: Router
  ) {
    localStorage.setItem("mediaAudio",JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo",JSON.stringify(this.mediaVideo))
    if(this.platform.ANDROID || this.platform.IOS) {
      localStorage.setItem('acceptcookie','T')
    }
    this.initializeApp();
  }

  initializeApp() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        setTimeout(() => {
          this.pageLoaded = true;
        }, 2000)
      }
    });
  }
}
