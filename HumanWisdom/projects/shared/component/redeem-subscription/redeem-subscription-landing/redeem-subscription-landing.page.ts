import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-redeem-subscription-landing',
  templateUrl: './redeem-subscription-landing.page.html',
  styleUrls: ['./redeem-subscription-landing.page.scss'],
})
export class RedeemSubscriptionLandingPage implements OnInit {

  public isSubscriber = false;
  public isLoggedIn = false;
  public email = '';
  public enabledModal = false;

  constructor( private router: Router) { }

  ngOnInit() {
    this.getUserDetail();
  }

  route(type) {
    if(type === 'redeem') {
      localStorage.setItem('redeemlanding', 'T');
      this.router.navigate(['/' + SharedService.getprogramName()+ '/adults/redeem-subscription']);
    }else if(type === 'login') {
      this.enabledModal = true;
    }else if(type === 'dash') {
      this.router.navigate(['/' + SharedService.getprogramName()+ '/adult-dashboard']);
    }
  }

  getClosemodalEvent() {
    this.getUserDetail();
    this.enabledModal = false;
  }

  getUserDetail() {
    let sub: any = localStorage.getItem('Subscriber');
    let login: any = localStorage.getItem("isloggedin");
    if (sub && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }
    if (login && login === 'T') {
      this.email = localStorage.getItem('email');
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

}
