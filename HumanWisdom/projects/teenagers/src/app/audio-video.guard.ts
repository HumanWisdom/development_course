import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AudioVideoGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let enabled = route.paramMap.get('enable');
    let isloggedin = localStorage.getItem('isloggedin');
    if(enabled === 'T') {
      return true
    } else {
      if(isloggedin === 'T') {
        return true
      }else {
        this.router.navigate(['/subscription/start-your-free-trial']);
        return false
      }
    }
  }
}
