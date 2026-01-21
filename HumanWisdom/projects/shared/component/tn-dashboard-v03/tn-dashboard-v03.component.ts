import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior
} from '@angular/cdk/platform';
import { Component, EventEmitter, Inject, Input, OnChanges, OnDestroy, OnInit, Output, PLATFORM_ID, SimpleChange, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';
import { SharedService, UrlConstant } from '../../../shared/services/shared.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProgramType } from '../../models/program-model';
import { LogEventService } from '../../services/log-event.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-tn-dashboard-v03',
  templateUrl: './tn-dashboard-v03.component.html',
  styleUrls: ['./tn-dashboard-v03.component.scss'],
})
export class TnDashboardV03Component implements OnInit, OnChanges, OnDestroy {
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();
  @Output() playstoreenable = new EventEmitter<boolean>();
  @Input() enableHamburger = false;
  @Input() isShowHeader = true;
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
  @Input() userDetails: any = [];
  userdetail:any;

  loginResponse: any;
  subscription: Subscription;
  @Input() isLoginPage: boolean = false;
  toursubscription: Subscription;
  routerSubscription: Subscription;
  disableClick = false;
  isAdults = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private router: Router, public Onboardingservice: OnboardingService,public logeventservice: LogEventService, public platform: Platform) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }

    this.roleid = JSON.parse(localStorage.getItem('RoleID'));
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
    } else {
      this.isloggedIn = false;
    }
      this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"))
  }

  getLoggedIn() {
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
    } else {
      this.isloggedIn = false;
    }
    return this.isloggedIn;
  }

  /**
   * Refresh all data from localStorage
   * Called on init and when data changes
   */
  refreshData() {
    // Refresh login response to get latest notification count and user data
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    
    // Update subscriber status
    let sub: any = localStorage.getItem("Subscriber");
    if (sub == '1') {
      this.subscriber = true;
      this.isShowbookMark = true;
    } else {
      this.subscriber = false;
      this.isShowbookMark = false;
    }
    
    // Update user details and profile image
    let userId = JSON.parse(localStorage.getItem("userId"));
    let userdetail = localStorage.getItem("userDetails");
    if(userdetail){
      let detail = JSON.parse(userdetail);
      if (detail && detail['UserImagePath'] != '') {
        this.url = detail['UserImagePath'].replace('\\', '/') + '?' + (new Date()).getTime();
      }
    }

    // Update logged-in state
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
    } else {
      this.isloggedIn = false;
    }
  }

  getIsSubscriber() {
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
        this.enableHamburger = changes.enableHamburger.currentValue;
        this.logeventservice.logEvent("click_Hamburger_Menu");

      }
    }

    if(changes && changes.isLoginPage && !changes.isLoginPage.firstChange){
      if(changes.isLoginPage.currentValue != changes.isLoginPage.previousValue){
        this.isLoginPage = changes.isLoginPage.currentValue;
      }
    }


    if(changes && changes.isShowHeader && !changes.isShowHeader.firstChange){
      if(changes.isShowHeader.currentValue != changes.isShowHeader.previousValue){
        this.isShowHeader = changes.isShowHeader.currentValue;
      }
    }
  }



  ngOnInit() {
    // Refresh data on component init (catches login/logout changes)
    this.refreshData();

    this.toursubscription = this.Onboardingservice.getEnableTour().subscribe((value) => {
      this.disableClick = value;
    });

    // this.subscription = this.Onboardingservice.getDataRecivedState().subscribe((value) => {
    //   if (value) {
    //     this.refreshData();
    //   }
    // });

    // Listen to route changes to refresh data (additional safety mechanism)
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.refreshData();
      });



    let ban = localStorage.getItem('enablebanner');
    if (ban === null || ban === 'T') {
      if (this.platform.IOS || this.platform.SAFARI || this.iOS()) {
        this.ios = true;
      } else if (this.IsAndroid()) {
        this.android = true;
      }
    } else {
      this.enableplaystore = false;
    }
  }

  IsAndroid(): boolean {
  if (isPlatformBrowser(this.platformId)) {
    return /Android/i.test(navigator.userAgent);
  }
  return false;
}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.toursubscription.unsubscribe();
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
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
    // if (!(SharedService.isIOSApp())) {
      this.logeventservice.logEvent("click_Free_Trial");

      this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.startFreeTrial)]);
    // }
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
    this.logeventservice.logEvent("click_Notifications");

    this.router.navigate([SharedService.getUrlfromFeatureName(UrlConstant.notification)]);
  }

  routedashboard() {
    this.router.navigate([SharedService.getDashboardUrls()])
  }


  getNotifi(notifi) {
    if (notifi) {
      return parseInt(notifi) > 9 ? 9 + '+' : notifi;
    } else {
      return '';
    }
  }


}
