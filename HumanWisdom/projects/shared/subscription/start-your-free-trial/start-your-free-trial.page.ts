import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { Constant } from '../../services/constant';
import { LogEventService } from '../../services/log-event.service';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { NavigationService } from '../../services/navigation.service';
import { ProgramType } from '../../models/program-model';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-start-your-free-trial',
  templateUrl: './start-your-free-trial.page.html',
  })
export class StartYourFreeTrialPage implements OnInit {
  @ViewChild('closemodal') closemodal: ElementRef;
  isAdults = false;
  path: any;
  address: any;
  ios = false;
  constructor(private router: Router, private location: Location, private servive: AdultsService,
    public logeventservice: LogEventService,
    private navigateService: NavigationService,
    private ngNavigatorShareService: NgNavigatorShareService,) { }

  ngOnInit() {
    if (SharedService.ProgramId == ProgramType.Adults) {
      this.isAdults = true;
    } else {
      this.isAdults = false;
    }
    this.logeventservice.logEvent('view_start_trial');
  }

  tryFreeSubscribe() {
    this.logeventservice.logEvent('click_start_trial');
    if (!(SharedService.isIOSApp() || SharedService.isAndroid())) {
      if (this.CheckIfUserIsLoggedIn()) {
        this.router.navigate([`/${SharedService.getprogramName()}/subscription/try-free-and-subscribe`]);
      } else {
        SharedService.UrlToRedirect = `/${SharedService.getprogramName()}/subscription/try-free-and-subscribe`;
        this.router.navigate([`/${SharedService.getprogramName()}/onboarding/login`]);
      }

    }
  }

  back() {
    this.logeventservice.logEvent('click_back');
    let curr = this.servive.previousUrl;
    var url = this.navigateService.goBack();
    if (curr == "" || curr == null) {
      curr = url;
    }
    let loggedin = localStorage.getItem("isloggedin")
    if ((!loggedin || loggedin || loggedin === 'F' || loggedin === 'T') && curr && (curr.includes('view-stories?sId') || curr.includes('wisdom-shorts/'))) {
      window.history.go(-2)
    } else {
      if (url == null || (url != null && url.includes("start-your-free-trial"))) {
        this.router.navigateByUrl(SharedService.getDashboardUrls());
      }
      else
        this.router.navigateByUrl(url);
    }
  }

  readMore(str) {
    this.logeventservice.logEvent('click_testimonial_' + str);
    SharedService.setDataInLocalStorage(Constant.TestimonialId, str);
    this.router.navigateByUrl(`/${SharedService.getprogramName()}/testimonials`)

  }
  CheckIfUserIsLoggedIn() {
    if (SharedService.getDataFromLocalStorage(Constant.Isloggedin) == Constant.ShortTrue) {
      return true;
    }
    return false;
  }
  getEnableBanner() {
    return SharedService.enablebanner;
  }


  routeToDashboard() {
    this.logeventservice.logEvent('click_will_do_later');

    this.router.navigateByUrl(SharedService.getDashboardUrls());
  }

  routeToTestimonial() {

    this.router.navigateByUrl(`/${SharedService.getprogramName()}/testimonials`)
  }

share() {
  const currentUrl = this.router.url; // ensures latest route
  const path = environment.production 
    ? "https://happierme.app" + currentUrl 
    : "https://staging.happierme.app" + currentUrl;

  this.ngNavigatorShareService.share({
    title: 'HappierMe Program',
    text: 'Hey, check out the HappierMe Program',
    url: path
  }).catch((error) => console.log(error));
}


    giftwisdom() {
    this.logeventservice.logEvent('click_gift_wisdom_Hamburger')
    localStorage.setItem("giftwisdom", "T");
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
            route == '/adults/help-support/accessibility-policy' ||
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
            route == '/teenagers/help-support/accessibility-policy' ||
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
  
      navigate(url) {
    this.closemodal?.nativeElement?.click();
    this.router.navigate([url]);
  }
}
