import { Component, OnDestroy } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { ProgramType } from '../../../shared/models/program-model';
import { NavigationService } from '../../../shared/services/navigation.service';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { TeenagersService } from './teenagers/teenagers.service';
import moengage from "@moengage/web-sdk";
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

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
  enableplaystore = false;
  routeid = 'search';
  isEnableHam = true;
  enablebanner = false;
  isShowHeader = false;
  dash = false;
  isLoginPage = false;
  enablefooter = false;

  constructor(private navigationService: NavigationService,
     private router: Router,
      private services: TeenagersService) {
    SharedService.ProgramId = 11;
    moengage.initialize({
      app_id: 'W2R5GQ0DULCQOIF0QXPW1QR1', debug_logs: 0,
      swPath: '/teenagers/serviceworker.js'
    });

    if (localStorage.getItem("isloggedin") !== 'T') {
      this.services.emaillogin();
    }
    this.navigationSubs = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.enableFooter();

      setTimeout(() => {
        this.pageLoaded = true;
      }, 2000)
      //  this.navigationService.routeToPath(event.url);
      this.navigationService.addToHistory(event.url);
      this.services.previousUrl = this.services.currentUrl;
      this.services.currentUrl = event.url;
    });
    //  this.setDynamicCSS();
  }


  setDynamicCSS() {
    window.document.getElementById('teenagersCss').setAttribute('href', this.teenagerCss);
  }
  ngOnDestroy(): void {
    this.navigationSubs.unsubscribe();
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      //   this.enablepopup.nativeElement.click();
    }
  }

  enableFooter() {
    let enable = false;
    if (this.router.url == "/teenagers/search" || this.router.url == "/search"
      || this.router.url.includes('/teenagers/site-search/') ||
      this.router.url.includes('/teenagers/search')) {
      this.dash = false
      this.journal = false
      this.fourm = false;
      this.search = true;
      this.enableprofile = false;
      this.routeid = 'search';
      this.isEnableHam = true;
      this.enableplaystore = false;
      this.isShowHeader = true;
      this.isLoginPage = false;
      enable = true;
    }
    if ((this.router.url == "/teenagers" || this.router.url == "/teenagers/teenager-dashboard") || (this.router.url == "/teenager-dashboard")
      || this.router.url.includes("/teenagers/teenager-dashboard") || this.router.url.includes("teenager-dashboard")) {
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
      this.isShowHeader = true;
      this.isLoginPage = false;
      enable = true;
    }
    if ((this.router.url == "/teenagers/journal") ||
      this.router.url.includes('/journal') || this.router.url.includes('/guidedquestions') ||
      (this.router.url.indexOf('/teenagers/note') > -1)) {
      this.dash = false
      this.journal = true;
      this.search = false;
      this.fourm = false;
      this.enableprofile = false;
      this.isEnableHam = false;
      this.enableplaystore = false;
      this.isShowHeader = false;
      this.isLoginPage = false;
      enable = true;
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
      this.isShowHeader = false;
      this.isLoginPage = false;
      enable = true;
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
      this.isShowHeader = false;
      this.isLoginPage = false;
      enable = true;
    }
    if (this.router.url == "/teenagers/notification") {
      this.dash = false
      this.journal = false
      this.fourm = false;
      this.enableprofile = false;
      this.search = false;
      this.isEnableHam = false;
      this.enableplaystore = false;
      this.isShowHeader = true;
      this.isLoginPage = false;
      enable = true;
    }
    if (this.router.url.includes("/teenagers/onboarding/login") ||
     this.router.url.includes("/subscription/start-your-free-trial")) {
      this.isLoginPage = true;
      this.isEnableHam = false;
      this.enableplaystore = false;
      this.isShowHeader = false;
      this.enablefooter = false;
    }
    this.isShowHeader = this.isShowHeader;
    if (enable) {
      this.enablefooter = true
    }
  }

  getplaystore(event) {
    this.enableplaystore = false;
    localStorage.setItem('enablebanner', 'F')
    SharedService.enablebanner = false
  }
}
