import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OnboardingService } from '../../../adults/src/app/onboarding/onboarding.service';
import { LogEventService } from "../../../adults/src/app/log-event.service";


import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from "@angular/cdk/platform";

@Component({
  selector: "app-hamburger",
  templateUrl: "./hamburger.component.html",
  styleUrls: ["./hamburger.component.scss"],
})
export class HamburgerComponent implements OnInit {
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(", ");
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();
  isPartner: any = "0";
  isloggedIn = false;
  name = "";
  roleid = 0;
  url = "";
  subscriber = false;
  partnerOption: string = "";
  @Input()
  enableplaystore = true;
  ios = false;
  subscriberType = "";
  enableprofile = true;

  constructor(
    private router: Router,
    private Onboardingservice: OnboardingService,
    public platform: Platform,
    public logeventservice: LogEventService
  ) {}

  getmenuevent() {
    if (this.router.url == "/onboarding/user-profile") {
      this.enableprofile = false;
    }
  }

  ngOnInit() {
    if (this.platform.IOS) {
      this.ios = true;
    }
    setTimeout(() => {
      let sub: any = localStorage.getItem("Subscriber");
      this.roleid = JSON.parse(localStorage.getItem("RoleID"));
      let userid = localStorage.getItem("isloggedin");
      let userres = JSON.parse(localStorage.getItem("loginResponse"));
      let nameupdate = localStorage.getItem("nameupdate");
      if (nameupdate) {
        this.name = nameupdate;
      } else if(userres) {
        this.name = userres["Name"];
      }
      if (userid === "T") {
        this.isloggedIn = true;
      }
      let userId = JSON.parse(localStorage.getItem("userId"));
      console.log(userid)
      this.Onboardingservice.getuser(userId).subscribe((res) => {
        let userdetail = res[0];
        localStorage.setItem("isPartner", res[0].IsPartner);
        localStorage.setItem("PartnerOption", res[0].PartnerOption);
        this.url =
          userdetail["UserImagePath"].split("\\")[1] +
          "?" +
          new Date().getTime();
        this.isPartner = localStorage.getItem("isPartner");
        this.partnerOption = localStorage.getItem("PartnerOption");
        this.partnerOption = localStorage.getItem("PartnerOption");
        this.subscriberType = localStorage.getItem("SubscriberType");
      });
      if (sub === "1" || sub === 1) {
        this.subscriber = true;
      }
    }, 2000);
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
    this.logeventservice.logEvent('click_logout_Hamburger')
    if (confirm("Are you sure you want to logout ?") === true) {
      if (this.platform.isBrowser) {
        localStorage.setItem("isloggedin", "F");
        localStorage.setItem("guest", "T");
        localStorage.setItem("navigateToUpgradeToPremium", "false");
        localStorage.setItem("btnClickBecomePartner", "false");
        this.router.navigate(["/onboarding/login"],  {replaceUrl:true,
        skipLocationChange:true});
      }
    }
  }

  loginroute() {
    this.router.navigate(["/onboarding/login"],{      replaceUrl:true,
      skipLocationChange:true});
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
    if (this.partnerOption == "ReceiveIncome") {
      this.router.navigate(["adults/partnership-report/income-activity"]);
    } else {
      this.router.navigate([
        "/adults/partnership-report/tree-plantation-report",
      ]);
    }
  }

  RouteToFaq() {
    this.logeventservice.logEvent('click_Partnership_FAQ_Hamburger')
    localStorage.setItem('isPartnerFaq','true');
    this.router.navigate(["/adults/partnership-webpage/partnership-index/"], {
      replaceUrl:true,
      skipLocationChange:true
    });
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
      var retVal = confirm("To become a Partner you will need to Complete Registration and login?");
      if (retVal == true) {
        this.Onboardingservice.navigateToUpgradeToPremium = true;
        this.router.navigate(['adults/partnership-app'],{skipLocationChange:true,replaceUrl:true});
      } else {
        return false;
      }
    } else {
      this.Onboardingservice.navigateToUpgradeToPremium = true;
      this.router.navigate(['adults/partnership-app'],{skipLocationChange:true,replaceUrl:true});
    }
  }

  Logevent(route, params, evtName) {
    this.logeventservice.logEvent(evtName);
    
    if(params !='' && route !='') {
      this.router.navigate([route, params]);
    }else if(route !='') { 
      if(route=='/adults/adverts-work' || 
      route =='/adults/adverts-student' || 
      route =='/adults/adverts-about' ||
      route == '/adults/help-support/faq'||
      route =='/adults/help-support/terms-conditions' ||
      route =='/adults/help-support/support' ||
      route == '/adults/partnership-webpage/partnership-index/'){
        this.navigate(route);
        return;
      }
      this.router.navigate([route]) 
      }
    }

    navigate(url){
      this.router.navigate([url],{replaceUrl:true,skipLocationChange:true});
    }
}
