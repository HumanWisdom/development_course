import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
})
export class BottomNavigationComponent implements OnInit {
  @Input() dash = false;
  journal = false
  fourm = false
  profile = false
  isloggedIn = false
  enableprofile = false
  search = false
  Subscriber: any;
  @Input() isGuidedQuestion?: boolean = false;
  @Output() saveQuestion = new EventEmitter();
  @Output() journalclick = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
      this.Subscriber = localStorage.getItem('Subscriber')
    }
    if (this.router.url == "/adults/search"
      || this.router.url.includes('/adults/site-search/') ||
      this.router.url.includes('/adults/search')) {
      this.dash = false
      this.journal = false
      this.profile = false
      this.fourm = false;
      this.search = true;
    }
    if (this.router.url == "/adults/adult-dashboard") {
      this.dash = true
      this.journal = false
      this.profile = false
      this.search = false;
    }
    if ((this.router.url == "/adults/journal") ||
      this.router.url.includes('/journal') || this.router.url.includes('/guidedquestions') ||
      (this.router.url.indexOf('/adults/note') > -1)) {
      this.dash = false
      this.profile = false
      this.journal = true
    }
    let reg = new RegExp('forum')
    if ((reg.test(this.router.url))) {
      this.dash = false
      this.journal = false
      this.profile = false
      this.fourm = true;
    }
    if (this.router.url == "/onboarding/user-profile"
      || this.router.url.includes('/onboarding/payment-details') || this.router.url.includes('/profile-edit') ||
      this.router.url.includes('/onboarding/myprogram')) {
      this.dash = false
      this.journal = false
      this.fourm = false;
      this.profile = true

      if (this.isloggedIn) {
        this.enableprofile = true;
      }
    }


  }
  routeDash() {
    this.router.navigate(['/adults/adult-dashboard'])

  }
  routeJournal() {
    // if(localStorage.getItem('isloggedin') === 'T')
    if (this.isloggedIn) {
      this.router.navigate(['/adults/journal'])
    } else {
      this.journalclick.emit('enablepopup');
    }

  }
  routeSearch() {
    this.router.navigate(['/adults/search']);
  }
  profileclickevent() {
    if (localStorage.getItem('isloggedin') === 'T') {
      this.router.navigate(['/onboarding/user-profile'])
    } else {
      // if(localStorage.getItem('acceptcookie') !== null)  {
      localStorage.setItem('btnclick', 'T')
      this.router.navigate(['/onboarding/login'], { replaceUrl: true, skipLocationChange: true })
      // }

    }
  }

  routeForum() {
    // if(localStorage.getItem('isloggedin') === 'T')
    this.router.navigate(['/forum'])

  }

  saveQuestionButton() {
    this.saveQuestion.emit();
  }
}
