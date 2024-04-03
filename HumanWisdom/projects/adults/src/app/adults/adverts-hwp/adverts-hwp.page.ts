import { Platform } from '@angular/cdk/platform';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdultsService } from '../adults.service';
import { OnboardingService } from '../../../../../shared/services/onboarding.service';
import { LogEventService } from '../../../../../shared/services/log-event.service';
import { SharedService } from '../../../../../shared/services/shared.service';
import { Constant } from '../../../../../shared/services/constant';
import { SubscriptionType } from '../../../../../shared/models/program-model';
import { paymentIntentModel } from '../../../../../shared/models/search-data-model';
import { environment } from '../../../../../environments/environment';
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
  public cardlist:any=[]
  paymentIntentModel:any;
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
      this.cardlist.PerMonthAmountOnAnnual = this.formatToDecimal((this.cardlist.Annual / 12));
    }, (err) => {
      this.content = err.error['Message'];
      this.enableAlert = true;
      // window.alert(err.error['Message'])
    }
    )
  }

  formatToDecimal(value) {
    if (Number.isInteger(value)) {
      return `${value}.00`;
    }
    return value.toFixed(2);
  }

  SetDataInLocalStorage() {
    SharedService.setDataInLocalStorage(Constant.ProgramModel, JSON.stringify(this.cardlist));
    SharedService.setDataInLocalStorage(Constant.PaymentIntentModel, JSON.stringify(this.paymentIntentModel));
  }

  SetPaymentIntentModel(selectedSubscription) {
    this.paymentIntentModel = {
      DiscountCode: "0",
      PlanID: selectedSubscription == Constant.MonthlyPlan ? SubscriptionType.Monthly.toString() : SubscriptionType.Annual.toString(),
      ProgID: SharedService.ProgramId?.toString(),
      RateID: this.cardlist?.RateID?.toString(),
      UserID: this.userId?.toString()
    } as paymentIntentModel
  }


  routedashboard(val = '') {
    if (val === 'free') {
      if (!this.isLoggedIn) {
        if(!(localStorage.getItem('fromlandingpage'))){
          localStorage.setItem("fromlandingpage", 'T')
        }
        window.location.href = environment.clientUrl+"/onboarding/login";
      } else {
        this.router.navigate(['/adults/adult-dashboard'])
      }
    } else if (val === 'dashboard') {
      if (!this.isLoggedIn) {
        window.location.href = environment.clientUrl+"/onboarding/login";
      } else {
        this.router.navigate(['/adults/adult-dashboard'])
      }
    } else if (val === 'redeem' || val == 'Monthly' || val == 'Yearly') {
      if(val === 'Monthly') {

        SharedService.setDataInLocalStorage(Constant.HwpSubscriptionPlan,Constant.MonthlyPlan );
        this.SetPaymentIntentModel(val);
        this.SetDataInLocalStorage();
      }
      else if(val === 'Yearly') {
        SharedService.setDataInLocalStorage(Constant.HwpSubscriptionPlan,Constant.AnnualPlan );
        this.SetPaymentIntentModel(val);
        this.SetDataInLocalStorage();
      }
      let res = localStorage.getItem("isloggedin")
      if(res === 'T'  &&  val === 'redeem') {
        this.router.navigate(['/adults/redeem-subscription'])
      }
      else if(res === 'T'  &&  (val === 'Monthly' || val === 'Yearly' )) {
        this.router.navigateByUrl('/adults/subscription/proceed-to-payment');
      }else{
        this.enabledModal = true;
      }
    } else if (!this.isLoggedIn) {
      localStorage.setItem("subscribepage", 'T')
      window.location.href = environment.clientUrl+"/onboarding/login";
    } else if (this.isLoggedIn && !this.isSubscriber) {
      localStorage.setItem('cartlist', JSON.stringify(this.cardlist));
      localStorage.setItem('personalised subscription', val);
      this.router.navigate(['/onboarding/viewcart'], { state: { quan: '1', plan: val } })
    } else if (this.isGuestuser) {
      window.location.href = environment.clientUrl+"/onboarding/login";
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
    this.enabledModal = false;
  }

  readMore(str){
    SharedService.setDataInLocalStorage(Constant.TestimonialId,str);
    this.router.navigate(['/adults/testimonials']);
  }
}


