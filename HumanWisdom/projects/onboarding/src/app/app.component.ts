import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import moengage from "@moengage/web-sdk";
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { environment } from '../../../environments/environment';
import { NavigationService } from '../../../shared/services/navigation.service';
import { MoengageService } from './moengage.service';
import { Meta, Title } from '@angular/platform-browser';
import { ProgramType } from '../../../shared/models/program-model';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { OnboardingService } from '../../../shared/services/onboarding.service';
import { Platform } from '@angular/cdk/platform';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    localStorage.setItem('adult', 'F')
  }
  //static progress mapping
  mediaAudio = "https://d1tenzemoxuh75.cloudfront.net"
  mediaVideo = "https://d1tenzemoxuh75.cloudfront.net"
  schema = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Example Web Site HumanWisdom',
    url: 'https://staging.humanwisdom.me/course'
  };
  isLoginPage = false;
  public pageLoaded = false;
  navigationSubs = new Subscription();
  dash = false;
  adultsCss='assets/css/custom.css'
  programType: ProgramType = ProgramType.Adults;
  journal = false
  fourm = false
  profile = true
  isloggedIn = false
  enableprofile = false
  search = false;
  enableplaystore = false;
  routeid='search';
  isEnableHam = true;
  enablebanner = false;
  isShowHeader = false;
  @ViewChild('enablepopup') enablepopup: ElementRef;
  constructor(
    private platform: Platform,
    private router: Router,
    private meta: Meta,
    private title: Title,
    public moengageService: MoengageService,
    private service :OnboardingService,
    private navigationService:NavigationService
  ) {
    if (platform.isBrowser) {
    }
    SharedService.isIos = SharedService.initializeIosCheck(this.platform);
    if (localStorage.getItem("isloggedin") !== 'T') {
      this.service.emaillogin();
    }
    localStorage.setItem('curatedurl', 'F');
    SharedService.ProgramId = 9;
    SharedService.ClientUrl = environment.clientUrl;
    localStorage.setItem("mediaAudio", JSON.stringify(this.mediaAudio))
    localStorage.setItem("mediaVideo", JSON.stringify(this.mediaVideo))
    if (this.platform.ANDROID || this.platform.IOS) {
      localStorage.setItem('acceptcookie', 'T')
    }
    this.initializeApp();
    this.getFreeScreens();
  }
  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  initializeApp() {
    let remember = localStorage.getItem("remember")
    let first = localStorage.getItem("firsttime")
    let firstTimeTour = localStorage.getItem("firstTimeTour");
    let firstTimeSearchTour = localStorage.getItem("firstTimeSearchTour");
    if (remember === 'F' && first === 'T') {
      localStorage.clear()
      localStorage.setItem('guest', 'T');
      localStorage.setItem('personalised', 'T');
      localStorage.setItem('acceptcookie', 'T');
      if(firstTimeTour === 'T') {
        localStorage.setItem('firstTimeTour', 'T');
      }
      if(firstTimeSearchTour === 'T') {
        localStorage.setItem('firstTimeSearchTour', 'T');
      }
      this.router.navigate(['/adults/adult-dashboard'])
    }

 
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        setTimeout(() => {
          this.pageLoaded = true;
        }, 2000)
      }
    });
  }


  ngOnDestroy(): void {
    this.navigationSubs.unsubscribe();
  }

  getFreeScreens() {
    if (localStorage.getItem("freeScreens") == null || localStorage.getItem("freeScreens") == 'undefined' || localStorage.getItem("freeScreens") == undefined) {
      this.service.freeScreens().subscribe((res) => {
        if (res) {
          let x = []
          let result = res.map(a => a.FreeScrs);
          let arr;
          result = result.forEach(element => {
            if (element && element.length !== 0) {
              x.push(element.map(a => a.ScrNo))
              arr = Array.prototype.concat.apply([], x);
            }
          })
          localStorage.setItem("freeScreens", JSON.stringify(arr))
        }
      });
    }
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  enableFooter() {
    if (this.router.url == "/adults/search" || this.router.url == "/search"
      || this.router.url.includes('/adults/site-search/') ||
      this.router.url.includes('/adults/search')) {
      this.dash = false
      this.journal = false
      this.fourm = false;
      this.search = true;
      this.enableprofile = false;
      this.routeid='search';
      this.isEnableHam = true;
      this.enableplaystore = false;
      this.isShowHeader=true;
      this.isLoginPage = false;
      return true;
    }
    if ((this.router.url == "/adults" || this.router.url == "/adults/adult-dashboard") || (this.router.url == "/adult-dashboard")
     || this.router.url.includes("/adults/adult-dashboard") || this.router.url.includes("adult-dashboard")) {
      this.dash = true;
      this.journal = false;
      this.search = false;
      this.fourm = false;
      this.enableprofile = false;
      this.isEnableHam = true;
      let ban = localStorage.getItem('enablebanner');
      if (ban === null || ban === 'T') {
       this.enableplaystore = true;
      } else {
        this.enableplaystore = false;
      }
      this.isShowHeader=true;
      this.isLoginPage = false;
      return true;
    }
    if ((this.router.url == "/adults/journal") ||
      this.router.url.includes('/journal') || this.router.url.includes('/guidedquestions') ||
      (this.router.url.indexOf('/adults/note') > -1)) {
      this.dash = false
      this.journal = true;
      this.search = false;
      this.fourm = false;
      this.enableprofile = false;
      this.isEnableHam = false;
      this.enableplaystore = false;
      this.isShowHeader=false;
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
      this.enableplaystore = false;
      this.isShowHeader=false;
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
      this.isEnableHam = false;
      this.enableplaystore = false;
      this.isShowHeader=false;
      this.isLoginPage = false;
      return true;
    }
  if (this.router.url == "/adults/notification") {
    this.dash = false
    this.journal = false
    this.fourm = false;
    this.enableprofile = false;
    this.search = false;
    this.isEnableHam = false;
    this.enableplaystore = false;
    this.isShowHeader=true;
    this.isLoginPage = false;
    return true;
  }
  if (this.router.url == "/onboarding/login") {
    this.isLoginPage = true;
  }
    this.isShowHeader=false;
    return false;
  }


  getplaystore(event) {
    this.enableplaystore = false;
    localStorage.setItem('enablebanner', 'F')
    SharedService.enablebanner = false
  }

  setDynamicCSS(){
     //   window.document.getElementById('adultsCss').setAttribute('href',this.adultsCss);
 }
}
