import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../adults.service';
import { OnboardingService } from '../../../../../shared/services/onboarding.service';
import { LogEventService } from '../../../../../shared/services/log-event.service';
import { Location } from '@angular/common';

@Component({
  selector: 'redeem-subscription',
  templateUrl: './redeem-subscription.page.html',
  styleUrls: ['./redeem-subscription.page.scss'],
})
export class RedeemSubscriptionPage implements OnInit {
  login = 'Login';
  public isGuestuser = false
  public isFirsttime = false
  public isSubscriber = false
  public isLoggedIn = false
  public countryCode: any = '';
  public cardlist = []
  public loginemail: any = '';
  public userId = 100
  public email: any = '';
  public verificationCode: any;
  public subthirdpage = false;
  public subfirstpage = true;
  public subsecondpage = false;
  public user: any
  public idToken: any
  public yearormonth = ''
  public modaldata = {}
  public activationCode: any = ''
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
  landingpage = '';

  constructor(
    public platform: Platform,
    private router: Router,
    private services: OnboardingService,
    public service: AdultsService,
    public logeventservice: LogEventService,
    private location: Location
  ) {
    localStorage.setItem('personalised', 'T');
    let guest = localStorage.getItem('guest');
    this.landingpage = localStorage.getItem('redeemlanding');
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
    let namedata = localStorage.getItem('name').split(' ')
    this.modaldata['email'] = localStorage.getItem('email');
    this.modaldata['firstname'] = namedata[0];
    this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
  }

  ngOnInit() {
    this.getCountry()
    this.userId = JSON.parse(localStorage.getItem("userId"))
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

  getcode(value) {
    this.activationCode = value;
  }

  verifyactkey() {
    console.log('verify')
    this.showWarning = false
    this.service.verifyactkey(this.activationCode)
      .subscribe(
        res => {
          if (res) {
            console.log('res');
            this.showWarning = true
            this.yearormonth = res;
            localStorage.setItem('yearormonth', this.yearormonth)
            this.subthirdpage = false
            this.subfirstpage = false
            this.subsecondpage = true;
          } else {
            console.log('false');
            this.subsecondpage = false;
            this.subthirdpage = true
          }
        },
        error => {
          console.log('error');
          this.subsecondpage = false;
          this.subthirdpage = true
        },
        () => {
        }
      );
    console.log('Warning')
    if (this.showWarning === false) {
      this.subsecondpage = false;
      this.subthirdpage = true
    }
  }

  submitcode() {

    this.services.verifyActivationKey(this.activationCode, this.userId, this.countryCode)
      .subscribe(
        res => {
          if (res) {
            this.showWarning = false
            let code: any = 1
            localStorage.setItem('Subscriber', code)
            this.subthirdpage = false;
            this.subsecondpage = false;
            this.subfirstpage = true;
            this.router.navigate(['/adults/redeem-congratulation'])
          } else {
            this.subthirdpage = true
          }
        },
        error => {
          this.subthirdpage = true
          console.log(error);
        },
        () => {
        }
      );
    console.log('Warning')
    if (this.showWarning === false) {
      this.subthirdpage = true
    }
  }

  already() {
    if(!this.enabledModal) {
      this.enabledModal = true;
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
      this.router.navigate(["/adults/onboarding/login"]);
    }
  }

  navigate(url, event){
    this.router.navigate([url],{replaceUrl:true,skipLocationChange:true});
    this.logeventservice.logEvent(event)
  }

  getClosemodalEvent(event) {
    this.enabledModal = event;
    let namedata = localStorage.getItem('name').split(' ')
    this.modaldata['email'] = localStorage.getItem('email');
    this.modaldata['firstname'] = namedata[0];
    this.modaldata['lastname'] = namedata[1] ? namedata[1] : '';
  }

  goBack(){
    this.location.back()
  }

}


