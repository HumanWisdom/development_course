import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'HumanWisdom-adverts',
  templateUrl: './adverts.page.html',
  styleUrls: ['./adverts.page.scss'],
})
export class AdvertsPage implements OnInit {

  constructor(
    private router: Router,
    private platform: Platform
  ){ }

  ngOnInit() {
  }

  routedashboard() 
  {
    this.router.navigate(['/adults/adult-dashboard'])
  }

  clickbanner(url = '') 
  {
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

}
