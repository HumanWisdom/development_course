import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EnableRouteGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
    let userid = localStorage.getItem('isloggedin');
    if (userid === 'T') {
      return true;
    } else {
      this.router.navigate(['/onboarding/login'],{replaceUrl:true});
      return false;
    }
  }
}
