import { Platform } from '@angular/cdk/platform';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../adults.service';
import { OnboardingService } from '../../../../../shared/services/onboarding.service';
import { LogEventService } from '../../../../../shared/services/log-event.service';

@Component({
  selector: 'HumanWisdom-adverts-hwp',
  templateUrl: './adverts-hwp.page.html',
  styleUrls: ['./adverts-hwp.page.scss'],
})
export class AdvertsHwpPage implements OnInit {
  login = 'Login';
  public isGuestuser = false
  public isFirsttime = false
  public isSubscriber = false
  public isLoggedIn = false
  public userId = 100
  public email: any = '';
  public verificationCode: any;
  public user: any
  public idToken: any
  public loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  mediaAudio = "https://d1tenzemoxuh75.cloudfront.net"
  mediaVideo = "https://d1tenzemoxuh75.cloudfront.net"
  public video = 3
  public audio = 4
  public saveUsername = JSON.parse(localStorage.getItem("saveUsername"))
  public userName: any
  public showWarning = false
  enableAlert = false;
  content = '';
  enablecancel = false;
  public registrationForm : any;
  enabledModal = false;
  public countryCode: any = '';
  public cardlist = []

  constructor(
    public platform: Platform,
    private router: Router,
    private services: OnboardingService,
    public service: AdultsService,
    public logeventservice: LogEventService
  ) {
    localStorage.setItem('personalised', 'T');
    let guest = localStorage.getItem('guest');
    let firsttime = localStorage.getItem('first');
    if (firsttime === 'T' || !firsttime) {
      this.isFirsttime = true
    }
    if (guest === 'T') {
      this.isGuestuser = true
    }
    let sub: any = localStorage.getItem('Subscriber');
    let login: any = localStorage.getItem("isloggedin");
    if (sub && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }
    if (login && login === 'T') {
      this.isLoggedIn = true;
      this.login = 'Logout';
    } else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
    this.getCountry()
    this.userId = JSON.parse(localStorage.getItem("userId"))
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


  getCountry() {
    this.services.getCountry().subscribe((res: any) => {
      if (res['in_eu']) {
        this.countryCode = 'EUR'
      } else {
        this.countryCode = res['country_code_iso3']
      }
      this.getPricing()
    }, error => {
      console.log(error)
    });
  }

  getPricing() {
    this.services.getPricing(this.countryCode).subscribe(res => {
      this.cardlist = res[0];
    }, (err) => {
      this.content = err.error['Message'];
      this.enableAlert = true;
      // window.alert(err.error['Message'])
    }
    )
  }

  routedashboard(val = '') {
    if (val === 'free') {
      if (!this.isLoggedIn) {
        localStorage.setItem("fromlandingpage", 'T')
        this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
      } else {
        this.router.navigate(['/adults/adult-dashboard'])
      }
    } else if (val === 'dashboard') {
      if (!this.isLoggedIn) {
        this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
      } else {
        this.router.navigate(['/adults/adult-dashboard'])
      }
    } else if (val === 'redeem' || val == 'Monthly' || val == 'Yearly') {
      let res = localStorage.getItem("isloggedin")
      if(res === 'T') {
        this.router.navigate(['/adults/redeem-subscription'])
      }else {
        this.enabledModal = true;
      }
    } else if (!this.isLoggedIn) {
      localStorage.setItem("subscribepage", 'T')
      this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
    } else if (this.isLoggedIn && !this.isSubscriber) {
      localStorage.setItem('cartlist', JSON.stringify(this.cardlist));
      localStorage.setItem('personalised subscription', val);
      this.router.navigate(['/onboarding/viewcart'], { state: { quan: '1', plan: val } })
    } else if (this.isGuestuser) {
      this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
    }
  }

  route_adverts_hwp() {
    this.router.navigate(['/adults/adverts-hwp'])
  }

  Logevent() {
    if (this.login === 'Logout') {
      this.enablecancel = true;
      this.content = "Are you sure you want to logout ?";
      this.enableAlert = true;
    } else {
      this.router.navigate(["/onboarding/login"]);
    }
  }

  navigate(url, event){
    this.router.navigate([url],{replaceUrl:true,skipLocationChange:true});
    this.logeventservice.logEvent(event)
  }

  getAlertcloseEvent(event) {
    this.content = '';
    this.enablecancel = false;
    this.enableAlert = false;
    if(event === 'ok') {
      this.logeventservice.logEvent('click_logout_Hamburger')
        if (this.platform.isBrowser) {
          localStorage.setItem("isloggedin", "F");
          localStorage.setItem("guest", "T");
          localStorage.setItem("navigateToUpgradeToPremium", "false");
          localStorage.setItem("btnClickBecomePartner", "false");
          this.router.navigate(["/onboarding/login"]);
        }
    }
  }

  getClosemodalEvent(event) {
    this.enabledModal = event
    this.enabledModal = false;
  }
}


