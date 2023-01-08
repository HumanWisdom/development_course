import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
@Component({
  selector: 'HumanWisdom-adverts-about',
  templateUrl: './adverts-about.page.html',
  styleUrls: ['./adverts-about.page.scss'],
})
export class AdvertsAboutPage implements OnInit {

  constructor(
    public platform: Platform,
    private router: Router
  ) { }

  ngOnInit() {
      window.history.pushState('', '', '/about-us');
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

}
