import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from '../../../../../../shared/services/shared.service';
@Component({
  selector: 'app-how-can-i-a05',
  templateUrl: './how-can-i-a05.page.html',
  styleUrls: ['./how-can-i-a05.page.scss'],
})
export class HowCanIA05Page implements OnInit {

  isAdults = false;
  isSubscriber = false;
  showModal = false;
  modalTitle = 'The best is yet to come';
  modalContent = 'Unlock the full experience and continue your journey to live your best life';

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
    this.router.navigate(["/adults/find-answers/how-can-i"])

  }

    handleMiniPodcastClick() {
    const isLoggedIn = localStorage.getItem('isloggedin') === 'T';
    const isSubscribed = localStorage.getItem('Subscriber') === '1';

    if (isLoggedIn && isSubscribed) {
      // Navigate to actual podcast page
      this.router.navigate(['/adults/find-answers/how-can-i/how-can-i-a05-at']);
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
