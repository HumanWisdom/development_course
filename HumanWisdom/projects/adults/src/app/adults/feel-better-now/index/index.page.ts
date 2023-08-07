import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public isSubscriber = false;
  public isLoggedIn = false;

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location, private router: Router) { }

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

  enableRoute(url, free = false) {
    if(free) {
      this.router.navigate([url])
    }else {
      if(this.isSubscriber && this.isLoggedIn){
        this.router.navigate([url])
      }else {
        this.router.navigate(['/onboarding/free-limit'])
      }
    }
  }

}
