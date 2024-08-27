import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EnableRouteGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
    let m: any = window.location.href;
    m = m.split('?');
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T' || m[1]) {
      return true;
    } else {
      this.router.navigate(['/adults/onboarding/login'],{replaceUrl:true});
      return false;
    }
  }
}
