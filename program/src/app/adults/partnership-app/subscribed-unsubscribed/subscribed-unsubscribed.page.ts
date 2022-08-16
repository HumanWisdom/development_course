import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribed-unsubscribed',
  templateUrl: './subscribed-unsubscribed.page.html',
  styleUrls: ['./subscribed-unsubscribed.page.scss'],
})
export class SubscribedUnsubscribedPage implements OnInit {
  userType:string;
  constructor() { }

  ngOnInit() {
    this.userType=localStorage.getItem('SubscriberType');
  }

}
