import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from '../../../../../../shared/services/shared.service';

@Component({
  selector: 'app-why-do-i-a10',
  templateUrl: './why-do-i-a10.page.html',
  styleUrls: ['./why-do-i-a10.page.scss'],
})
export class WhyDoIA10Page implements OnInit {

  isAdults = false;
  isSubscriber = false;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';

  @ViewChild('enablepopup') enablepopup: ElementRef;

  constructor(private location: Location, private router:Router) { }

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

  goBack() 
  {
    // this.location.back()
    this.router.navigate(["/adults/find-answers/why-do-i"])

  }

  handleMiniPodcastClick() {
  const isLoggedIn = localStorage.getItem('isloggedin') === 'T';
  const isSubscribed = localStorage.getItem('Subscriber') === '1';

  if (isLoggedIn && isSubscribed) {
    // Navigate to actual podcast page
    this.router.navigate(['/adults/find-answers/why-do-i/why-do-i-a10-at']);
  } else {
      // this.router.navigate(['/subscription/start-your-free-trial']);
      this.showModal = true;
    }
  }
        onModalClose(event: string) {
  this.showModal = false;
  if (event === 'ok') {
    // Navigate to free trial when user clicks "Start your free trial"
    this.router.navigate([SharedService.getprogramName(), 'subscription', 'start-your-free-trial']);
      }
    }

}
