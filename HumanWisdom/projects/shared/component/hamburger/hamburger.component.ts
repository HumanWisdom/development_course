import { Component, ElementRef, Input, OnInit, ViewChild, OnChanges, SimpleChanges, OnDestroy, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { LogEventService } from "./../../services/log-event.service";
import { OnboardingService } from "../../services/onboarding.service";
import { ProgramType } from '../../models/program-model';

import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior
} from "@angular/cdk/platform";
import { SharedService } from "../../services/shared.service";
import { Subject, Subscription } from "rxjs";
import { environment } from "../../../../projects/environments/environment";
import { debounceTime, throttleTime } from "rxjs/operators";

@Component({
  selector: "app-hamburger",
  templateUrl: "./hamburger.component.html",
  styleUrls: ["./hamburger.component.scss"],
})
export class HamburgerComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('closemodal') closemodal: ElementRef;
  @ViewChild('closeLogoutmodal') closeLogoutmodal: ElementRef;
  isHamburgerClicked = false;
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(", ");
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();
  isPartner: any = "0";
  isloggedIn = false;
  name = "";
  roleid = 0;
  subscriber = false;
  partnerOption: string = "";
  @Input()
  enableplaystore = true;
  ios = false;
  subscriberType = "";
  enableprofile = true;
  enableAlert = false;
  content = '';
  enablebecomepartner = false;
  @Input() userDetails: any
  subscription: Subscription;
  toursubscription: Subscription;
  disableClick = true;
  isAdults: boolean = true;
  isDataRecieved = false;
  url='';
  private closeEventSubject: Subject<void> = new Subject();
  constructor(
    private router: Router,
    private Onboardingservice: OnboardingService,
    public platform: Platform,
    public logeventservice: LogEventService,
    private cd: ChangeDetectorRef
  ) {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    setTimeout(() => {
      this.disableClick = false;
    }, 500);
    this.closeEventSubject.pipe(throttleTime(1000)).subscribe(() => {
      this.closemodal.nativeElement.click();
    })
    this.Onboardingservice.getUserDetails.subscribe(res => {
      if (res) {
        console.log('hamburger subscription called');
        console.log(res);
        this.userDetails = res[0];
        this.isDataRecieved = true;
        this.setInitialData();
        this.setProfileImage( this.userDetails);
        console.log(res);
        this.isDataRecieved = false;
      }
    });
  }

  onProgramChange() {
    if (this.isAdults) {
      window.location.href = environment.clientUrl + "/teenagers/teenager-dashboard";
    } else {
      window.location.href = environment.clientUrl + '/adults/adult-dashboard';
    }
  }

  getmenuevent() {
    if (this.router.url == "/onboarding/user-profile") {
      this.enableprofile = false;
    }
  }

  closemenuevent() {
    this.closeEventSubject.next();
  }

  handleReferFriendClick() {
    const url = this.isAdults ? '/adults/refer-friend' : '/teenagers/refer-friend';
    this.router.navigate([url]);
  }

  handleReferFriend() {
    const url = this.isAdults ? '/adults/refer-friend' : '/teenagers/refer-friend';
    this.Logevent(url, '', 'click_refer_friend_Hamburger');
    this.router.navigate([url]);
  }

  handleTreeSistersClick() {
    const url = this.isAdults ? '/adults/treesisters' : '/teenagers/treesisters';
    this.Logevent(url, '', 'click_treesisters_Hamburger');
    this.router.navigate([url]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setInitialData();
  }

  setInitialData() {
    if (this.userDetails) {
       //localStorage.setItem("isPartner", this.userDetails.IsPartner);
      localStorage.setItem("PartnerOption", this.userDetails.PartnerOption);
      if (this.userDetails['UserImagePath'] != "") {
        this.url = this.userDetails['UserImagePath'].replace('\\', '/') + '?' + (new Date()).getTime();
      }
      this.isPartner = localStorage.getItem("isPartner");
      this.partnerOption = localStorage.getItem("PartnerOption");
      this.partnerOption = localStorage.getItem("PartnerOption");
      this.subscriberType = localStorage.getItem("SubscriberType");
      let userres = JSON.parse(localStorage.getItem("loginResponse"));
      this.subscriber = SharedService.isSubscriber();
      if (userres) {
        this.name = userres["Name"];
      }
    }
  }




  ngOnInit() {
    if (this.platform.IOS || this.platform.SAFARI || this.iOS()) {
      this.ios = true;
    }
    let userId = JSON.parse(localStorage.getItem("userId"));
     this.Onboardingservice.getuserDetail();
      if (localStorage.getItem("isPartner") != null) {
      this.isPartner = localStorage.getItem("isPartner");
    }
    if (localStorage.getItem("PartnerOption") != null) {
      this.partnerOption = localStorage.getItem("PartnerOption")?.toString();
    }
    if (localStorage.getItem("SubscriberType") != null) {
      this.subscriberType = localStorage.getItem("SubscriberType");
    }
    if (localStorage.getItem("Subscriber") != null) {
      let sub: any = localStorage.getItem("Subscriber");
      if (sub === "1" || sub === 1) {
        this.subscriber = true;
      }
    }

    this.toursubscription = this.Onboardingservice.getEnableTour().subscribe((value) => {
      this.disableClick = value;
    });

    this.subscription = this.Onboardingservice.getDataRecivedState().subscribe((value) => {
      if (value) {
        let sub: any = localStorage.getItem("Subscriber");
        this.roleid = JSON.parse(localStorage.getItem("RoleID"));
        let userid = localStorage.getItem("isloggedin");
        let userres = JSON.parse(localStorage.getItem("loginResponse"));
        let nameupdate = localStorage.getItem("nameupdate");
        if (nameupdate) {
          this.name = nameupdate;
        } else if (userres) {
          this.name = userres["Name"];
        }
        if (userid === "T") {
          this.isloggedIn = true;
        }

        if (sub === "1" || sub === 1) {
          this.subscriber = true;
        }
      }
    })
  }


  getSubscriber() {
    let sub: any = localStorage.getItem("Subscriber");
    if (sub === "1" || sub === 1) {
      this.subscriber = true;
    }
    return this.subscriber;
  }


  getLoggedIn() {
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
    }
    return this.isloggedIn;
  }

  getName() {
    return this.name===""? 'guest' :this.name

  }


  routeGuide() {
    this.router.navigate([`/adults/program-guide/s35001`]);
  }

  getevent() {
    this.name = localStorage.getItem("name");
  }

  routeAffiliate() {
    let userId = JSON.parse(localStorage.getItem("userId"));
    window.location.href = `https://humanwisdom.me/Admin/#/frameworks/affiliate-s01-a/${userId}`;
    return false;
  }

  logout() {
    this.content = 'Are you sure you want to logout ?';
    this.enablebecomepartner = false;
    this.enableAlert = true;
  }

  loginroute() {
      this.router.navigate([SharedService.getprogramName() + "/onboarding/login"]);
  }

  giftwisdom() {
    this.logeventservice.logEvent('click_gift_wisdom_Hamburger')
    localStorage.setItem("giftwisdom", "T");
  }

  /* subscribeevent(subs = '') {
    if (this.ios) {
      window.alert('Please close the app. Login again .Complete payment on the payment screen')
    } else {
      this.router.navigate([subs])
    }
  } */

  routeToPartnerScreen() {
    this.logeventservice.logEvent('click_My_Partnership_Hamburger')
    this.router.navigate(["adults/partnership-report/income-report"]);
  }

  RouteToFaq() {
    this.logeventservice.logEvent('click_Partnership_FAQ_Hamburger')
    localStorage.setItem('isPartnerFaq', 'true');
    this.router.navigate(["/adults/partnership-webpage/partnership-index/"], {
      replaceUrl: true,
      skipLocationChange: true
    });
    this.closemodal?.nativeElement?.click();

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
  getPartnerInfo() {
    return SharedService.getPartnerInfo()
  }

  // let el: HTMLElement = document.getElementById('s1');
  //   el.style.transform = "translate3d(0,0,0)";
  //   el.style.transition = "transform 0.35s";

  // myCircle = document.querySelector('#s1');
  // setTranslate(0,0,myCircle);

  // setTranslate(xPos, yPos, el) {
  // 	el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
  // }

  RouteToBecomeAPartner() {
    this.logeventservice.logEvent('click_BecomeAPartner_Hamburger')
    //  localStorage.setItem("navigateToUpgradeToPremium","true");
    if (localStorage.getItem("isloggedin") == "F" || localStorage.getItem("isloggedin") == null) {
      this.content = 'To become a Partner you will need to Complete Registration and login?';
      this.enablebecomepartner = true;
      this.enableAlert = true;
      this.router.navigate([SharedService.getprogramName() + "/onboarding/login"]);
    } else {
      this.Onboardingservice.navigateToUpgradeToPremium = true;
      this.router.navigate(['adults/partnership-app'], { skipLocationChange: true, replaceUrl: true });
    }
    this.closemodal?.nativeElement?.click();
  }

  Logevent(route, params, evtName) {
    this.logeventservice.logEvent(evtName);

    if (this.isAdults) {
      if (params != '' && route != '') {
        this.router.navigate([route, params]);
      } else if (route != '') {
        if (route == '/adults/testimonials' ||
          route == '/adults/adverts-work' ||
          route == '/adults/adverts-student' ||
          route == '/adults/adverts-about' ||
          route == '/adults/help-support/faq' ||
          route == '/adults/help-support/terms-conditions' ||
          route == '/adults/help-support/support' ||
          route == '/adults/partnership-webpage/partnership-index/') {
          this.navigate(route);
          return;
        }
        if (!this.ios) {
          // route == '/' + SharedService.getprogramName() + '/subscription/start-your-free-trial'
          this.router.navigate(['/' + SharedService.getprogramName() + route])
        } else {
          this.router.navigate(['/' + SharedService.getprogramName() + route])
        }
      }
    } else {
      route = route.toString().replace('adults', 'teenagers');
      if (params != '' && route != '') {
        this.router.navigate([route, params]);
      } else if (route != '') {
        if (route == '/teenagers/testimonials' ||
          route == '/teenagers/adverts-work' ||
          route == '/teenagers/adverts-student' ||
          route == '/teenagers/adverts-about' ||
          route == '/teenagers/help-support/faq' ||
          route == '/teenagers/help-support/terms-conditions' ||
          route == '/teenagers/help-support/privacy-policy' ||
          route == '/teenagers/help-support/cookie-policy' ||
          route == '/teenagers/help-support/support' ||
          route == '/teenagers/partnership-webpage/partnership-index/') {
          this.navigate(route);
          return;
        }
        if (!this.ios) {
          // route == '/' + SharedService.getprogramName() + '/subscription/start-your-free-trial'
          this.router.navigate(['/' + SharedService.getprogramName() + route])
        } else {
          this.router.navigate(['/' + SharedService.getprogramName() + route])
        }
      }
    }

    this.closemodal?.nativeElement?.click();
  }

  routeManageSubscriptiont(route, params, evtName) {
    this.logeventservice.logEvent(evtName);
    if (this.ios) {
      const manage_subscr = new CustomEvent("manage_subscr");
      window.dispatchEvent(manage_subscr);
    } else {
      this.router.navigate(['/' + SharedService.getprogramName() + route]);
    }
    this.closemodal?.nativeElement?.click();
  }

  navigate(url) {
    this.closemodal?.nativeElement?.click();
    this.router.navigate([url]);
  }

  getAlertcloseEvent(event) {
    if (this.enableAlert) {
      this.enableAlert = false;
      this.content = '';
      if (event === 'ok') {
        const accessObj: any = window;
        (accessObj)?.Moengage?.destroy_session();
        if (this.enablebecomepartner) {
          let res = localStorage.getItem("isloggedin");
          if (!res || res === 'F') {
            this.closeLogoutmodal.nativeElement.click();
            localStorage.setItem("isloggedin", "F");
            localStorage.setItem("guest", "T");
            localStorage.setItem("navigateToUpgradeToPremium", "true");
            localStorage.setItem("btnClickBecomePartner", "true");
       
           // this.router.navigate(["/" + SharedService.getprogramName() + "/onboarding/login"]);
          } else {
            this.Onboardingservice.navigateToUpgradeToPremium = true;
            this.router.navigate(['adults/partnership-app'], { skipLocationChange: true, replaceUrl: true });
          }
        } else {
          this.logeventservice.logEvent('click_logout_Hamburger');
          if (this.platform.isBrowser) {
            this.closemenuevent();
            this.closeLogoutmodal.nativeElement.click();
            this.isloggedIn = false;
            this.isPartner = false;
            this.initialize();
            let acceptCookie = localStorage.getItem("acceptcookie");
            let firstTimeTour = localStorage.getItem("firstTimeTour");
            let firstTimeSearchTour = localStorage.getItem("firstTimeSearchTour");
            localStorage.clear();
            if (firstTimeTour === 'T') {
              localStorage.setItem('firstTimeTour', 'T');
            }
            if (firstTimeSearchTour === 'T') {
              localStorage.setItem('firstTimeSearchTour', 'T');
            }
            localStorage.setItem("isloggedin", "F");
            localStorage.setItem("guest", "T");
            localStorage.setItem("acceptcookie", acceptCookie);
            localStorage.setItem("navigateToUpgradeToPremium", "false");
            localStorage.setItem("btnClickBecomePartner", "false");
            const auth2 = (window as any).gapi?.auth2?.getAuthInstance();
            if (auth2) {
              auth2.signOut().then(() => {
                this.router.navigate([SharedService.getprogramName() + "/onboarding/login"]);
              });
            }else {
              this.router.navigate(["/" + SharedService.getprogramName() + "/onboarding/login"]);
            }
          }
        }
      }
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

  GetSubscriptionText() {
    if (this.ios) {
      return "Manage Subscriptions"
    }
    return "My Subscriptions"
  }

  initialize() {
    this.isPartner = "0";
    this.isloggedIn = false;
    this.name = "guest";
    this.roleid = 0;
    this.url = "";
    this.subscriber = false;
    this.partnerOption = "";
    this.enableplaystore = true;
  }

  setLogevent(evtName, param = '') {
    this.logeventservice.logEvent(evtName);
  }

  ngOnDestroy() {
    // this.closemodal?.nativeElement?.click();
    this.toursubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      let userdetail = localStorage.getItem("userDetails");
      if (userdetail) {
        let detail = JSON.parse(userdetail);
        this.setProfileImage(detail);
      }
      else{
        console.log("url:"+ (this.url))
        if(this.url.toString().includes("https://") ==false)
        this.url = this.url === '' || this.url.includes('undefined') ?'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/icons/user/profile_default.svg' :'';
        console.log("url:"+ (this.url))
      }
    }, 1000);

  }

  setProfileImage(detail) {
    if (detail) {
      if (detail && detail['UserImagePath'] != '') {
        this.url = detail['UserImagePath'].replace('\\', '/') + '?' + (new Date()).getTime();
      }
    }

   if(this.url.toString().includes("https://") ==false)
    this.url = this.url === '' || this.url.includes('undefined') ? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/icons/user/profile_default.svg' : 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/' + this.url;
   console.log( "url:" + this.url )
    this.cd.detectChanges();
  }
  }
