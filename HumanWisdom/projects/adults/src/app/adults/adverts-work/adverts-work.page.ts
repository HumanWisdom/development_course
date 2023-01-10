import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
@Component({
  selector: 'HumanWisdom-adverts-work',
  templateUrl: './adverts-work.page.html',
  styleUrls: ['./adverts-work.page.scss'],
})
export class AdvertsWorkPage implements OnInit {

  constructor(
    public platform: Platform,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.router.url.includes('/wisdom-for-work')) {
      window.history.pushState('', '', '/wisdom-for-work');
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

}
