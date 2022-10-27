import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'HumanWisdom-adverts-hwp',
  templateUrl: './adverts-hwp.page.html',
  styleUrls: ['./adverts-hwp.page.scss'],
})
export class AdvertsHwpPage implements OnInit {
  public isGuestuser = false
  public isFirsttime = false

  constructor(
    public platform: Platform,
    private router: Router
  ) {
    let guest = localStorage.getItem('guest');
    let firsttime = localStorage.getItem('first');
    if (firsttime === 'T' || !firsttime) {
      this.isFirsttime = true
    }
    if (guest === 'T') {
      this.isGuestuser = true
    }
  }

  ngOnInit() {
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
    if (this.isFirsttime) {
      this.router.navigate(['/intro/intro-carousel'])
    } else if (this.isGuestuser) {
      this.router.navigate(['/adults/adult-dashboard'])
    }
  }

}
