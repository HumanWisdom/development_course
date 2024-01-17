import { Platform } from "@angular/cdk/platform";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogEventService } from '../../services/log-event.service';

@Component({
  selector: 'app-tn-advert',
  templateUrl: './tn-advert.component.html',
  styleUrls: ['./tn-advert.component.scss'],
})
export class TnAdvertComponent implements OnInit {
  login = 'Login';
  public isLoggedIn = false;
  public enableAlert = false;
  public content = '';
  public enablecancel = false;

  constructor(
    private router: Router,
    public platform: Platform,
    public logeventservice: LogEventService
  ) { }

  ngOnInit() {
    let userid = localStorage.getItem("isloggedin");
    if (userid === "T") {
      this.login = 'Logout'
      this.isLoggedIn =true
    }
  }

  routedashboard() {
    if (!this.isLoggedIn) {
      if(!(localStorage.getItem('fromlandingpage'))){
        localStorage.setItem("fromlandingpage", 'T')
      }
      this.router.navigate(['/onboarding/login'],{replaceUrl:true,skipLocationChange:true})
    } else {
      this.router.navigate(['/adults/adult-dashboard'])
    }

  }

  route_adverts_hwp() {
    this.router.navigate(['/adults/adverts-hwp'])
  }

  Logevent() {
    if (this.login === 'Logout') {
      this.content = "Are you sure you want to logout ?";
      this.enablecancel = true;
      this.enableAlert = true;
    } else {
      this.router.navigate(["/onboarding/login"]);
    }
  }
  navigate(url){
    this.router.navigate([url],{replaceUrl:true,skipLocationChange:true});
  }

  getAlertcloseEvent(event) {
    this.enableAlert = false;
    this.enablecancel = false;
    this.content = '';
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
}
