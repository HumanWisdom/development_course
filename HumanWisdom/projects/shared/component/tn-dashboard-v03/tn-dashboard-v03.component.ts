import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior
} from '@angular/cdk/platform';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../../../adults/src/app/onboarding/onboarding.service';

@Component({
  selector: 'app-tn-dashboard-v03',
  templateUrl: './tn-dashboard-v03.component.html',
  styleUrls: ['./tn-dashboard-v03.component.scss'],
})
export class TnDashboardV03Component implements OnInit {
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();
  @Output() playstoreenable = new EventEmitter<boolean>();

  isloggedIn = false;
  name = ''
  roleid = 0
  url = '';
  subscriber = true;
  isShowbookMark = false;
  @Input()
  enableplaystore = false
  @Input()
  routeid = ''
  android = false;
  ios = false;
  cardlist = [];
  countryCode: any;
  constructor(private router: Router, private Onboardingservice: OnboardingService, public platform: Platform) {
    this.roleid = JSON.parse(localStorage.getItem('RoleID'));
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
    }

  }

  ngOnInit() {
    setTimeout(() => {
      let sub: any = localStorage.getItem("Subscriber");
      if (sub == '1') {
        this.subscriber = true;
        this.isShowbookMark = true;
      } else {
        this.subscriber = false;
        this.isShowbookMark = false;
      }
      let userId = JSON.parse(localStorage.getItem("userId"))

      this.Onboardingservice.getuser(userId).subscribe((res) => {
        let userdetail = res[0];
        this.url = userdetail['UserImagePath'].split('\\')[1]
        this.name = localStorage.getItem('name');
      })

    }, 9000)
    let ban = localStorage.getItem('enablebanner');
    if (ban === null || ban === 'T') {
      if (this.platform.IOS || this.platform.SAFARI) {
        this.ios = true;
      } else if (this.platform.ANDROID) {
        this.android = true;
      }
    } else {
      this.enableplaystore = false;
    }
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
    // localStorage.clear();
    localStorage.setItem('isloggedin', 'F')
    localStorage.setItem('guest', 'T')
    this.router.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
  }

  loginroute() {
    this.router.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
  }

  giftwisdom() {
    localStorage.setItem('giftwisdom', 'T')
  }

  closeplaystore() {
    this.enableplaystore = false;
    localStorage.setItem('enablebanner', 'F')
    this.playstoreenable.emit(false);
  }

  Subscribe() {
    this.router.navigate(['/onboarding/add-to-cart']);
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
  goToNotification() {
    this.router.navigate(['adults/notification']);
  }

  routedashboard() {
    this.router.navigate(['/adults/adult-dashboard'])
  }
}
