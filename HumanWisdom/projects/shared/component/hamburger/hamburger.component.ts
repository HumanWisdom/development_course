import { Component, ElementRef, Input, OnInit, ViewChild, OnChanges, SimpleChanges, OnDestroy, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { LogEventService } from "./../../services/log-event.service";
import { OnboardingService } from "../../services/onboarding.service";
import { ProgramType } from '../../models/program-model';
import { ChatbotService } from "../../services/chatbot.service";

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
  isWeb = false;
  subscriberType = "";
  enableprofile = true;
  enableAlert = false;
  isAndroid = false;
  content = '';
  enablebecomepartner = false;
  @Input() userDetails: any
  subscription: Subscription;
  toursubscription: Subscription;
  disableClick = true;
  isAdults: boolean = true;
  isDataRecieved = false;
  url = '';
  private closeEventSubject: Subject<void> = new Subject();
  constructor(
    private router: Router,
    private Onboardingservice: OnboardingService,
    public platform: Platform,
    public logeventservice: LogEventService,
    private cd: ChangeDetectorRef,
    private chatbotService: ChatbotService
  ) {
    this.isAndroidDevice();
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
        this.setProfileImage(this.userDetails);
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

  isAndroidDevice(){
    this.isAndroid = SharedService.isAndroid();
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


 isBrowser() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}


  ngOnInit() {
    if (this.platform.IOS || this.platform.SAFARI || this.iOS()) {
      this.ios = true;
    }
    if(this.isBrowser()){
        this.isWeb = true;
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
    const name = this.safeJsonParse(localStorage.getItem("name"));
    if (name == null || name == undefined || name == '') {
       return this.name === "" ? "guest" : this.name;
    }
    return name;
  }

   private safeJsonParse(value: string | null): any {
    if (!value || value === 'null' || value === 'undefined') {
      return null;
    }
    
    // If it's already a plain string (not JSON), return it as is
    const trimmed = value.trim();
    if (!trimmed.startsWith('{') && !trimmed.startsWith('[') && !trimmed.startsWith('"')) {
      // Check if it's a number string
      if (!isNaN(Number(trimmed)) && trimmed !== '') {
        return Number(trimmed);
      }
      // Return as plain string
      return trimmed;
    }
    
    try {
      return JSON.parse(value);
    } catch (e) {
      // If parsing fails, return the original value as string
      console.warn('Failed to parse JSON, returning as string:', value, e);
      return value;
    }
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
      // this.Onboardingservice.navigateToUpgradeToPremium = true;
      //this.router.navigate(['adults/partnership-app']);
      this.router.navigate(['adults/partnership-app'], { skipLocationChange: true, replaceUrl: true });
    }
    this.closemodal?.nativeElement?.click();
  }

  Logevent(route, params, evtName) {
    this.logeventservice.logEvent(evtName);

    let currentRoute = route;
    if (!this.isAdults && route) {
      currentRoute = route.toString().replace('adults', 'teenagers');
    }

    if (!currentRoute || currentRoute === '') {
      this.closemodal?.nativeElement?.click();
      return;
    }

    if (params !== '' && currentRoute !== '') {
      this.router.navigate([currentRoute, params]);
    } else if (currentRoute !== '') {
      if (this.isDirectNavigationRoute(currentRoute)) {
        this.navigate(currentRoute);
        return;
      }
      this.router.navigate(['/' + SharedService.getprogramName() + currentRoute]);
    }

    this.closemodal?.nativeElement?.click();
  }

  private isDirectNavigationRoute(route: string): boolean {
    const directSuffixes = [
      '/testimonials',
      '/adverts-work',
      '/adverts-student',
      '/adverts-about',
      '/help-support/faq',
      '/help-support/terms-conditions',
      '/help-support/support',
      '/help-support/accessibility-policy',
      '/partnership-webpage/partnership-index/',
      '/help-support/privacy-policy',
      '/help-support/cookie-policy'
    ];
    return directSuffixes.some(suffix => route.endsWith(suffix));
  }

  routeManageSubscriptiont(route, params, evtName) {
    this.logeventservice.logEvent(evtName);
    if (this.ios || this.isAndroid) {
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
        this.performAlertAction();
      }
    }
  }

  private performAlertAction() {
    const accessObj: any = window;
    (accessObj)?.Moengage?.destroy_session();
    if (this.enablebecomepartner) {
      this.handleBecomePartnerAlert();
    } else {
      this.handleLogoutAlert();
    }
  }

  private handleBecomePartnerAlert() {
    const res = localStorage.getItem("isloggedin");
    if (!res || res === 'F') {
      this.closeLogoutmodal.nativeElement.click();
      localStorage.setItem("isloggedin", "F");
      localStorage.setItem("guest", "T");
      localStorage.setItem("navigateToUpgradeToPremium", "true");
      localStorage.setItem("btnClickBecomePartner", "true");
    } else {
      this.Onboardingservice.navigateToUpgradeToPremium = true;
      this.router.navigate(['adults/partnership-app'], { skipLocationChange: true, replaceUrl: true });
    }
  }

  private handleLogoutAlert() {
    this.logeventservice.logEvent('click_logout_Hamburger');
    this.chatbotService.clearMessages(); // reset chat history on logout
    if (this.platform.isBrowser) {
      this.closemenuevent();
      this.isloggedIn = false;
      this.isPartner = false;
      this.initialize();
      const acceptCookie = localStorage.getItem("acceptcookie");
      const firstTimeTour = localStorage.getItem("firstTimeTour");
      const firstTimeSearchTour = localStorage.getItem("firstTimeSearchTour");
      localStorage.clear();
      sessionStorage.clear();
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

      // Reset Google Identity Services state
      this.resetGoogleSignIn();
      this.Onboardingservice.guestEmailLogin();
      const auth2 = (window as any).gapi?.auth2?.getAuthInstance();
      if (auth2) {
        auth2.signOut().then(() => {
          this.router.navigate([SharedService.getprogramName() + "/onboarding/login"]);
        });
      } else {
        this.router.navigate(["/" + SharedService.getprogramName() + "/onboarding/login"]);
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
    if (this.ios || SharedService.isAndroid) {
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

  private resetGoogleSignIn(): void {
    try {
      // Reset Google Identity Services if available
      if (typeof (window as any).google !== 'undefined' && (window as any).google.accounts) {
        // Cancel any pending One Tap prompts
        if ((window as any).google.accounts.id) {
          (window as any).google.accounts.id.cancel();
        }
      }
      
      // Clear any existing Google button containers to force re-render
      const buttonContainers = ['googleBtnSignup', 'googleBtnLogin'];
      buttonContainers.forEach(buttonId => {
        const container = document.getElementById(buttonId);
        if (container) {
          container.innerHTML = '';
        }
      });
      
      // Set flag to force re-initialization on login page
      sessionStorage.setItem('forceGoogleReinit', 'true');
    } catch (error) {
      console.warn('Error resetting Google Sign-In:', error);
    }
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
      else {
        console.log("url:" + (this.url))
        if (this.url.toString().includes("https://") == false)
          this.url = this.url === '' || this.url.includes('undefined') ?(this.isAdults? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/profile_default.svg': 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/icons/user/profile_default.svg')  : '';
        console.log("url:" + (this.url))
      }
    }, 1000);

    // Add event listeners for submenu checkboxes to hide/show parent menu items
    setTimeout(() => {
      const partnershipCheckbox = document.getElementById('item-partnership') as HTMLInputElement;
      const helpSupportCheckbox = document.getElementById('item-2') as HTMLInputElement;
      const parentMenu = document.querySelector('ul.dh_ul') as HTMLElement;
      const menuParent = document.querySelector('.menu_parent') as HTMLElement;

      if (partnershipCheckbox && parentMenu && menuParent) {
        const partnershipLi = partnershipCheckbox.closest('li') as HTMLElement;
        partnershipCheckbox.addEventListener('change', () => {
          if (partnershipCheckbox.checked) {
            parentMenu.classList.add('submenu-open');
            parentMenu.dataset.openSubmenu = 'partnership';
            menuParent.classList.add('has-submenu-open');
            if (partnershipLi) {
              partnershipLi.classList.add('submenu-active');
            }
          } else {
            parentMenu.classList.remove('submenu-open');
            delete parentMenu.dataset.openSubmenu;
            menuParent.classList.remove('has-submenu-open');
            if (partnershipLi) {
              partnershipLi.classList.remove('submenu-active');
            }
          }
        });
      }

      if (helpSupportCheckbox && parentMenu && menuParent) {
        const helpSupportLi = helpSupportCheckbox.closest('li') as HTMLElement;
        helpSupportCheckbox.addEventListener('change', () => {
          if (helpSupportCheckbox.checked) {
            parentMenu.classList.add('submenu-open');
            parentMenu.dataset.openSubmenu = 'help-support';
            menuParent.classList.add('has-submenu-open');
            if (helpSupportLi) {
              helpSupportLi.classList.add('submenu-active');
            }
          } else {
            parentMenu.classList.remove('submenu-open');
            delete parentMenu.dataset.openSubmenu;
            menuParent.classList.remove('has-submenu-open');
            if (helpSupportLi) {
              helpSupportLi.classList.remove('submenu-active');
            }
          }
        });
      }
    }, 1500);
  }

  setProfileImage(detail) {
    if (detail) {
      if (detail && detail['UserImagePath'] != '') {
        this.url = detail['UserImagePath'].replace('\\', '/') + '?' + (new Date()).getTime();
      }
    }

    if (this.url.toString().includes("https://") == false)
      this.url = this.url === '' || this.url.includes('undefined') ? (this.isAdults? 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/v_1_4/profile_default.svg': 'https://d1tenzemoxuh75.cloudfront.net/assets/svgs/icons/user/profile_default.svg') : 'https://humanwisdoms3.s3.eu-west-2.amazonaws.com/assets/images/tiles/' + this.url;
    console.log("url:" + this.url)
    this.cd.detectChanges();
  }
}