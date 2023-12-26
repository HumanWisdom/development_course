import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LogEventService } from '../../../../../../shared/services/log-event.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public isSubscriber = false;
  public isLoggedIn = false;

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location,
    private router: Router,
    private logeventservice:LogEventService
    ) {
    localStorage.setItem('feelbetternow', 'T')
   }

  ngOnInit() {
    this.isSubscriber = localStorage.getItem('Subscriber') === '1' ? true : false;
    this.isLoggedIn = localStorage.getItem("isloggedin") === 'T' ? true : false;
  }

  getclcickevent(event) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    this.location.back()
  }

  enableRoute(url) {
     this.logeventservice.logEvent("click_"+ String(url).split("/")[2]);
    this.router.navigate([url])
  }

}
