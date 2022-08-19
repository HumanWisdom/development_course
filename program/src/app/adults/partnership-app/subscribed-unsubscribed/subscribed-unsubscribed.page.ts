import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribed-unsubscribed',
  templateUrl: './subscribed-unsubscribed.page.html',
  styleUrls: ['./subscribed-unsubscribed.page.scss'],
})
export class SubscribedUnsubscribedPage implements OnInit {
  userType:string;
  constructor(public router:Router,public location:Location) { }

  ngOnInit() {
    this.userType=localStorage.getItem('SubscriberType');
  }

  GetStarted(){
    this.router.navigate(['adults/partnership-app/referral-code']);
  }
  
      goBack(){
    this.location.back();
      }

}
