import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior
} from '@angular/cdk/platform';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService,UrlConstant } from '../../../shared/services/shared.service';
import { Subscription } from 'rxjs';
import { ProgramType } from '../../models/program-model';
@Component({
  selector: 'app-tn-dashboard-v03',
  templateUrl: './tn-dashboard-v03.component.html',
  styleUrls: ['./tn-dashboard-v03.component.scss'],
})
export class TnDashboardV03Component implements OnInit,OnChanges,OnDestroy {
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();
  @Output() playstoreenable = new EventEmitter<boolean>();
  @Input() enableHamburger = false;
  @Input() isShowHeader =  true;
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
  userDetails: any = [];
  loginResponse: any;
  subscription: Subscription;
  @Input() isLoginPage:boolean=false;
  toursubscription: Subscription;
  disableClick = false;
  isAdults = false;

  constructor(private router: Router, public Onboardingservice: OnboardingService, public platform: Platform) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    
    this.roleid = JSON.parse(localStorage.getItem('RoleID'));
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
    }else{
      this.isloggedIn = false;
    }

  }

  getLoggedIn(){
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
    }else{
      this.isloggedIn = false;
    }
    return this.isloggedIn;
  }

  getIsSubscriber(){
    let sub: any = localStorage.getItem("Subscriber");
    if (sub == '1') {
      this.subscriber = true;
      this.isShowbookMark = true;
    } else {
      this.subscriber = false;
      this.isShowbookMark = false;
    }
    return this.subscriber;
  }
  ngOnChanges(changes: SimpleChanges): void {
      if(changes && changes.enableHamburger && !changes.enableHamburger.firstChange){
        if(changes.enableHamburger.currentValue != changes.enableHamburger.previousValue){
          console.log(changes.enableHamburger.currentValue);
          this.enableHamburger = changes.enableHamburger.currentValue;
        }
      }

      if(changes && changes.isLoginPage && !changes.isLoginPage.firstChange){
        if(changes.isLoginPage.currentValue != changes.isLoginPage.previousValue){
          console.log(changes.isLoginPage.currentValue);
          this.isLoginPage = changes.isLoginPage.currentValue;
        }
      }

      if(changes && changes.isShowHeader && !changes.isShowHeader.firstChange){
        if(changes.isShowHeader.currentValue != changes.isShowHeader.previousValue){
          console.log(changes.isShowHeader.currentValue);
          this.isShowHeader = changes.isShowHeader.currentValue;
        }
      }
  }



  ngOnInit() {
    this.toursubscription = this.Onboardingservice.getEnableTour().subscribe((value) => {
      this.disableClick = value;
    });

    this.subscription = this.Onboardingservice.getDataRecivedState().subscribe((value) => {
      if(value){
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
            this.userDetails = res;
            let userdetail = res[0];
            this.url = userdetail['UserImagePath'].split('\\')[1]
            this.name = localStorage.getItem('name');
          });
          this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
      }
    });



    let ban = localStorage.getItem('enablebanner');
    if (ban === null || ban === 'T') {
      if (this.platform.IOS || this.platform.SAFARI || this.iOS()) {
        this.ios = true;
      } else if (this.platform.ANDROID) {
        this.android = true;
      }
    } else {
      this.enableplaystore = false;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.toursubscription.unsubscribe();
  }

  iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
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
    this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.login)])
  }

  loginroute() {
    this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.login)]);
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
    if(!(this.platform.IOS || this.platform.SAFARI)){
      this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.startFreeTrial)]);
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
  goToNotification() {
    this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.notification)]);
  }

  routedashboard() {
    this.router.navigate([SharedService.getDashboardUrls()])
  }


  getNotifi(notifi) {
    if(notifi) {
       return parseInt(notifi) > 9 ? 9 + '+' : notifi;
    }else {
      return '';
    }
  }


}
