import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
import {Location } from '@angular/common';
@Component({
  selector: 'HumanWisdom-adverts-hwp-app',
  templateUrl: './adverts-hwp-app.page.html',
  styleUrls: ['./adverts-hwp-app.page.scss'],
})
export class AdvertsHwpAppPage implements OnInit {

  constructor(
    public platform: Platform,
    private router: Router,
    private location:Location
  ) { }

  ngOnInit() {
    if (!this.router.url.includes('/applications')) {
      window.history.pushState('', '', '/applications');
    }
  }

  clickbanner(url = '') {
    if (url === '') {
      if (this.platform.IOS || this.platform.SAFARI) {
        window.open("https://apps.apple.com/in/app/humanwisdom/id1588535567");
      } else if (this.platform.ANDROID) {
        window.open("https://play.google.com/store/apps/details?id=io.humanwisdom.me&hl=en&gl=US");
      }
    } else {
      window.open(url)
    }
  }

  routedashboard() {
    this.router.navigate(['/adults/adult-dashboard'])
  }
  
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
  
  }
}
