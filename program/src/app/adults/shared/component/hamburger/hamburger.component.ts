import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from 'src/app/onboarding/onboarding.service';

import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior
} from '@angular/cdk/platform';


@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();


  isloggedIn = false;
  name = ''
  roleid = 0
  url = '';
  subscriber = false;
  @Input()
  enableplaystore = true
  ios = false

  constructor(private router: Router, private Onboardingservice: OnboardingService, public platform: Platform) {

  }

  ngOnInit() {
    if (this.platform.IOS) {
      this.ios = true;
    }
    setTimeout(() => {
      let sub: any = localStorage.getItem("Subscriber")
      this.roleid = JSON.parse(localStorage.getItem('RoleID'));
      let userid = localStorage.getItem('isloggedin');
      this.name = localStorage.getItem('name');
      if (userid === 'T') {
        this.isloggedIn = true
      }
      let userId = JSON.parse(localStorage.getItem("userId"))
      this.Onboardingservice.getuser(userId).subscribe((res) => {
        let userdetail = res[0];
        this.url = userdetail['UserImagePath'].split('\\')[1] + '?' + (new Date()).getTime()
      })
      if (sub === '1' || sub === 1) {
        this.subscriber = true;
      }
    }, 2000)
  }

  routeGuide() {
    this.router.navigate([`/adults/program-guide/s35001`])
  }



  getevent() {
    this.name = localStorage.getItem('name');
  }

  routeAffiliate() {
    let userId = JSON.parse(localStorage.getItem("userId"))
    window.location.href = `https://humanwisdom.me/Admin/#/frameworks/affiliate-s01-a/${userId}`;
    return false;
  }


  logout() {
    if (this.platform.isBrowser) {
      localStorage.setItem('isloggedin', 'F')
      localStorage.setItem('guest', 'T')
      this.router.navigate(['/onboarding/login'])
    }
  }

  loginroute() {
    this.router.navigate(['/onboarding/login'])
  }

  giftwisdom() {
    localStorage.setItem('giftwisdom', 'T')
  }

  /* subscribeevent(subs = '') {
    if (this.ios) {
      window.alert('Please close the app. Login again .Complete payment on the payment screen')
    } else {
      this.router.navigate([subs])
    }
  } */

}