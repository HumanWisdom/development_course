import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { SharedService } from '../../../shared/services/shared.service';
import { ProgramType } from '../../../shared/models/program-model';
import { NavigationService } from '../../../shared/services/navigation.service';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { TeenagersService } from './teenagers/teenagers.service';
import moengage from "@moengage/web-sdk";
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CommonService } from '../../../shared/services/common.service';
import { OnboardingService } from '../../../shared/services/onboarding.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'teenagers';
  teenagerCss = 'assets/css/custom.css';
  navigationSubs = new Subscription();
  programType: ProgramType = ProgramType.Teenagers;
  journal = false
  fourm = false
  pageLoaded = false;
  profile = true
  isloggedIn = false
  enableprofile = false
  search = false;
  learn = false;
  enableplaystore = false;
  routeid = 'search';
  isEnableHam = true;
  enablebanner = false;
  isShowHeader = false;
  dash = false;
  isLoginPage = false;
  enablefooter = false;
  isSearchActiveGlobal = false;
  isNavVisibleGlobal = true;
  private searchActiveSubscription: Subscription;
  private navVisibleSubscription: Subscription;

  constructor(private navigationService: NavigationService,
    private router: Router,
    private renderer: Renderer2,
    private platform: Platform,
    private services: TeenagersService, private commonService: CommonService, private onboardingService: OnboardingService) {
    SharedService.ProgramId = 11;
    SharedService.isIos = SharedService.initializeIosCheck(this.platform);
    moengage.initialize({
      app_id: 'W2R5GQ0DULCQOIF0QXPW1QR1', debug_logs: 0,
      swPath: '/teenagers/serviceworker.js'
    });
    
    // Subscribe to login URL subject to handle navigation after login
    this.commonService.loginUrlSubs.subscribe((url) => {
      if (url) {
        console.log('Navigating to:', url);
        this.router.navigateByUrl(url);
      }
    });

    // Subscribe to search active state
    this.searchActiveSubscription = this.commonService.isSearchActive$.subscribe((isActive) => {
      this.isSearchActiveGlobal = isActive;
    });

    // Subscribe to nav visibility (e.g. Olly questions view hides the global nav)
    this.navVisibleSubscription = this.commonService.isNavVisible$.subscribe((visible) => {
      this.isNavVisibleGlobal = visible;
      // When on the Today page, update isShowHeader in real time
      if (this.router.url.includes('repeat-user/my-daily-practice')) {
        this.isShowHeader = visible;
      }
    });
    let urls = window.location.href.split('authtoken=');
    if (urls && urls[1] == undefined) {
      if (localStorage.getItem("isloggedin") == 'T') {
        this.getUserInformationById(SharedService.getUserId())
      } else {
        this.services.emaillogin();
      }
    }

    this.navigationSubs = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.enableFooter();

      setTimeout(() => {
        this.pageLoaded = true;
      }, 2000)
      if (!event.url.includes('/login')) {
        this.removeRecaptchaScript();
      }
      //  this.navigationService.routeToPath(event.url);
      this.navigationService.addToHistory(event.url);
      this.services.previousUrl = this.services.currentUrl;
      this.services.currentUrl = event.url;
      this.services.ensureModuleContextForUrl(event.url);
    });
    this.services.ensureModuleContextForUrl(window.location.pathname);
    //  this.setDynamicCSS();
  }

  removeRecaptchaScript() {
    const recaptchaElement = document.querySelector('.grecaptcha-badge');
    if (recaptchaElement) {
      // Remove the element from the DOM
      this.renderer.removeChild(document.body, recaptchaElement);
    }
    const script = document.getElementById('recaptcha-script');
    if (script) {
      document.head.removeChild(script);
    }
  }

  async getUserInformationById(loggedInUserId) {
    let authtoken = localStorage.getItem("token");
    if (authtoken) {
      if (authtoken.startsWith('"')) authtoken = JSON.parse(authtoken);
      this.services.verifytoken(authtoken).subscribe(res => {
        if (res) {
          localStorage.setItem("Subscriber", res['Subscriber']);
          localStorage.setItem("loginResponse", JSON.stringify(res));
        }
        this.onboardingService.getuser(loggedInUserId).subscribe(res => {
          if (res) {
            let subscriber = res[0].IsSubscribed;
            localStorage.setItem('Subscriber', subscriber);
          }
        });
      });
    }
  }


  setDynamicCSS() {
    window.document.getElementById('teenagersCss').setAttribute('href', this.teenagerCss);
  }
  ngOnDestroy(): void {
    this.navigationSubs.unsubscribe();
    if (this.searchActiveSubscription) {
      this.searchActiveSubscription.unsubscribe();
    }
    if (this.navVisibleSubscription) {
      this.navVisibleSubscription.unsubscribe();
    }
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      //   this.enablepopup.nativeElement.click();
    }
  }

  enableFooter() {
    if (this.isSearchActiveGlobal) {
      return false;
    }
    let enable = false;
    if (this.router.url == "/teenagers/search" || this.router.url == "/search"
      || this.router.url.includes('/teenagers/site-search/') ||
      this.router.url.includes('/teenagers/search') || this.router.url.includes('/teenagers/learn') || this.router.url.includes('/learn')) {
      this.dash = false
      this.journal = false
      this.fourm = false;
      this.search = false;
      this.learn = true;
      this.enableprofile = false;
      this.routeid = 'search';
      this.isEnableHam = true;
      this.enableplaystore = false;
      this.isShowHeader = true;
      this.isLoginPage = false;
      return true;
    }
    if ((this.router.url == "/teenagers" || this.router.url == "/teenagers/teenager-dashboard") || (this.router.url == "/teenager-dashboard")
      || this.router.url.includes("/teenagers/teenager-dashboard") || this.router.url.includes("teenager-dashboard") || this.router.url == "/teenagers/home" || this.router.url == "/home" || this.router.url.includes("home") || this.router.url.includes("explore")) {
      this.dash = false;
      this.journal = false;
      this.search = true;
      this.learn = false;
      this.fourm = false;
      this.enableprofile = false;
      this.isEnableHam = true;
      let ban = localStorage.getItem('enablebanner');
      if (ban === null || ban === 'T') {
        this.enableplaystore = true;
      } else {
        this.enableplaystore = false;
      }
      this.isShowHeader = this.commonService.isHeaderVisibleOnScroll;
      this.isLoginPage = false;
      return true;
    }
    if (this.router.url.includes('repeat-user/my-daily-practice') || this.router.url.includes('/today')) {
      this.dash = true;
      this.journal = false;
      this.search = false;
      this.learn = false;
      this.fourm = false;
      this.enableprofile = false;
      this.isEnableHam = true;
      this.enableplaystore = false;
      this.isShowHeader = this.isNavVisibleGlobal;
      this.isLoginPage = false;
      return true;
    }
    if ((this.router.url == "/teenagers/journal") ||
      (this.router.url.includes('/journal') && !this.router.url.includes('/journal/')) ||
      (this.router.url.indexOf('/teenagers/note') > -1)) {
      this.dash = false
      this.journal = true;
      this.search = false;
      this.learn = false;
      this.fourm = false;
      this.enableprofile = false;
      this.isEnableHam = false;
      this.enableplaystore = false;
      this.isShowHeader = false;
      this.isLoginPage = false;
      return true;
    }
    let reg = new RegExp('forum')
    if ((reg.test(this.router.url))) {
      this.dash = false
      this.journal = false
      this.fourm = true;
      this.enableprofile = false;
      this.journal = false;
      this.isEnableHam = false;
      this.search = false;
      this.learn = false;
      this.enableplaystore = false;
      this.isShowHeader = false;
      this.isLoginPage = false;
      return true;
    }
    if (this.router.url == "/onboarding/user-profile"
      || this.router.url.includes('/profile-edit')) {
      this.dash = false
      this.journal = false
      this.fourm = false;
      this.enableprofile = true;
      this.search = false;
      this.learn = false;
      this.isEnableHam = false;
      this.enableplaystore = false;
      this.isShowHeader = false;
      this.isLoginPage = false;
      return true;
    }
    if (this.router.url == "/teenagers/notification") {
      this.dash = false
      this.journal = false
      this.fourm = false;
      this.enableprofile = false;
      this.search = false;
      this.learn = false;
      this.isEnableHam = false;
      this.enableplaystore = false;
      this.isShowHeader = false;
      this.isLoginPage = false;
      return true;
    }
    if (this.router.url == "/teenagers/onboarding/login") {
      this.isLoginPage = true;
    }
    this.isShowHeader = false;
    return false;
  }

  getplaystore(event) {
    this.enableplaystore = false;
    localStorage.setItem('enablebanner', 'F')
    SharedService.enablebanner = false
  }
}
