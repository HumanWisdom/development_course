import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../../../shared/services/navigation.service';

@Component({
  selector: 'app-why-do-i-a11',
  templateUrl: './why-do-i-a11.page.html',
  styleUrls: ['./why-do-i-a11.page.scss'],
})
export class WhyDoIA11Page implements OnInit {

  isAdults = false;
  isSubscriber = false;

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location,private router:Router,private navigationService:NavigationService) { }

  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    let sub: any = localStorage.getItem('Subscriber');
    if (userid === 'T' && sub === '1') {
      this.isSubscriber = true;
    } else {
      this.isSubscriber = false;
    }
  }

  getclcickevent(event) 
  {
    if (event === 'enablepopup') 
    {
      this.enablepopup.nativeElement.click();
    }
  }

  goBack() {
    var url = this.navigationService.navigateToBackLink();
    if (url == null) {
      this.location.back();
    }else{
      this.router.navigate([url]);
    }
  }

  handleMiniPodcastClick() {
  const isLoggedIn = localStorage.getItem('isloggedin') === 'T';
  const isSubscribed = localStorage.getItem('Subscriber') === '1';

  if (isLoggedIn && isSubscribed) {
    // Navigate to actual podcast page
    this.router.navigate(['/teenagers/find-answers/why-do-i/why-do-i-a11-at']);
  } else {
      this.router.navigate(['/teenagers/subscription/start-your-free-trial']);
  }
  }
}
