import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JournalGuard implements CanActivate {
  isloggedIn = false
  Subscriber: any;

  constructor(public router: Router) {

  }

  canActivate(): boolean {
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      this.isloggedIn = true
      this.Subscriber = localStorage.getItem('Subscriber')
    }
    if (!this.isloggedIn) {
      this.navigatefreelimit()
      return false;
    } else if (!this.Subscriber) {
      this.navigatefreelimit()
      return false;
    } else if (this.Subscriber === '0') {
      this.navigatefreelimit()
      return false;
    } else {
      return true;
    }
  }

  navigatefreelimit() {
    return this.router.navigate(['/onboarding/free-limit']);
  }

}
