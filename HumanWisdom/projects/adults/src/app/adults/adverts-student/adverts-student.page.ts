import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
@Component({
  selector: 'HumanWisdom-adverts-student',
  templateUrl: './adverts-student.page.html',
  styleUrls: ['./adverts-student.page.scss'],
})
export class AdvertsStudentPage implements OnInit {

  constructor(
    public platform: Platform,
    private router: Router
  ) { }

  ngOnInit() {
    window.history.pushState('', '', '/wisdom-for-students');
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
