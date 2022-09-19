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
  isPartner: any = '0';
  isloggedIn = false;
  name = ''
  roleid = 0
  url = '';
  subscriber = false;
  partnerOption: string = '';
  @Input()
  enableplaystore = true
  ios = false
  subscriberType='';
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
        localStorage.setItem("isPartner", res[0].IsPartner);
        localStorage.setItem('PartnerOption', res[0].PartnerOption);
        this.url = userdetail['UserImagePath'].split('\\')[1] + '?' + (new Date()).getTime()
        this.isPartner = localStorage.getItem('isPartner');
        this.partnerOption = localStorage.getItem('PartnerOption')
        this.partnerOption = localStorage.getItem('PartnerOption')
        this.subscriberType=localStorage.getItem('SubscriberType');
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
    if (confirm('Are you sure you want to logout ?') === true) {
      if (this.platform.isBrowser) {
        localStorage.setItem('isloggedin', 'F')
        localStorage.setItem('guest', 'T')
        localStorage.setItem('navigateToUpgradeToPremium', 'false')
        this.router.navigate(['/onboarding/login'])
      }
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

  routeToPartnerScreen() {
    if (this.partnerOption == 'ReceiveIncome') {
      this.router.navigate(['adults/partnership-report/income-activity']);
    } else {
      this.router.navigate(['/adults/partnership-report/tree-plantation-report']);
    }
  }


  RouteToFaq() {
    this.router.navigate(['/adults/partnership-webpage/partnership-index/'], {
      state: {
        isPartnerFaq: true,
      }
    });
  }

  // isShowDiv = false;  
  // ispartnership = false;

  toggleDisplayDiv() {
    // this.isShowDiv = !this.isShowDiv;
    // let el: HTMLElement = document.getElementById('s1');
    // el.style.transform = "translate3d(0,0,0)";

    // this.isShowDiv = true;
    // this.ispartnership = false;

    // let el: HTMLElement = document.getElementById('s1');
    // el.style.display = "block";

    // let el2: HTMLElement = document.getElementsByClassName('s2');
    // el2.style.display = "none";
  }

  dpartnership() {
    // let el: HTMLElement = document.getElementById('ispartnership');
    // el.style.display = "block";
  }

  // let el: HTMLElement = document.getElementById('s1');
  //   el.style.transform = "translate3d(0,0,0)";
  //   el.style.transition = "transform 0.35s";

  // myCircle = document.querySelector('#s1');
  // setTranslate(0,0,myCircle);

  // setTranslate(xPos, yPos, el) {
  // 	el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
  // }

RouteToBecomeAPartner(){
   if(this.subscriberType=='Annual'){
    this.router.navigate(['/adults/partnership-app']);
   }else {
    this.router.navigate(['/adults/partnership-webpage']);
   }
}

}