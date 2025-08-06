import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how-can-i-a02',
  templateUrl: './how-can-i-a02.page.html',
  styleUrls: ['./how-can-i-a02.page.scss'],
})
export class HowCanIA02Page implements OnInit {

  isAdults = false;
  isSubscriber = false;

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    let sub: any = localStorage.getItem('Subscriber');
    if (userid === 'T' && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }
  }

  getclcickevent(event: string) {
    if (event === 'enablepopup') {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    this.router.navigate(["/adults/find-answers/how-can-i"]);
  }

  handleMiniPodcastClick() {
    const isLoggedIn = localStorage.getItem('isloggedin') === 'T';
    const isSubscribed = localStorage.getItem('Subscriber') === '1';

    if (isLoggedIn && isSubscribed) {
      // Navigate to actual podcast page
      this.router.navigate(['/adults/find-answers/how-can-i/how-can-i-a02-at']);
    } else {
        this.router.navigate(['/subscription/start-your-free-trial']);
    }
  }
}
